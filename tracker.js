// ========================================
// THE TAKE - Job Tracker
// ========================================

// Job deck configuration
const JOB_DECK = [
    { type: "Small", pot: 8000, crew: 3, count: 3 },
    { type: "Medium", pot: 12000, crew: 4, count: 4 },
    { type: "Large", pot: 16000, crew: 4, count: 3 },
    { type: "Huge", pot: 20000, crew: 5, count: 2 },
    { type: "Final Job", pot: 18000, crew: 4, count: 1, isFinal: true }
];

// ========================================
// State Management
// ========================================

class JobTracker {
    constructor() {
        this.loadState();
    }

    loadState() {
        const saved = localStorage.getItem('thetake-tracker');
        if (saved) {
            try {
                const state = JSON.parse(saved);
                this.jobs = state.jobs;
                this.currentIndex = state.currentIndex;
                this.rollover = state.rollover;
                this.history = state.history;
            } catch (e) {
                console.error('Failed to load state:', e);
                this.initializeState();
            }
        } else {
            this.initializeState();
        }
    }

    initializeState() {
        this.jobs = [];
        this.currentIndex = 0;
        this.rollover = 0;
        this.history = [];
    }

    saveState() {
        const state = {
            jobs: this.jobs,
            currentIndex: this.currentIndex,
            rollover: this.rollover,
            history: this.history
        };
        localStorage.setItem('thetake-tracker', JSON.stringify(state));
    }

    reset() {
        localStorage.removeItem('thetake-tracker');
        this.initializeState();
    }

    // ========================================
    // Job Deck Management
    // ========================================

    createJobDeck() {
        const deck = [];

        // Add all regular jobs
        JOB_DECK.forEach(jobType => {
            if (!jobType.isFinal) {
                for (let i = 0; i < jobType.count; i++) {
                    deck.push({
                        type: jobType.type,
                        pot: jobType.pot,
                        crew: jobType.crew,
                        isFinal: false
                    });
                }
            }
        });

        // Shuffle regular jobs
        this.shuffle(deck);

        // Add Final Job at the end
        const finalJob = JOB_DECK.find(j => j.isFinal);
        deck.push({
            type: finalJob.type,
            pot: finalJob.pot,
            crew: finalJob.crew,
            isFinal: true
        });

        return deck;
    }

    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // ========================================
    // Game Flow
    // ========================================

    startGame() {
        this.reset();
        this.jobs = this.createJobDeck();
        this.currentIndex = 0;
        this.rollover = 0;
        this.history = [];
        this.saveState();
        this.showScreen('job-screen');
        this.renderJobScreen();
    }

    getCurrentJob() {
        return this.jobs[this.currentIndex];
    }

    getTotalPot() {
        const job = this.getCurrentJob();
        return job.pot + this.rollover;
    }

    resolveSuccess() {
        this.tempResolution = { success: true };
        this.showScreen('resolution-screen');
        this.renderResolutionScreen();
    }

    resolveFailure() {
        this.tempResolution = { success: false };
        this.showScreen('resolution-screen');
        this.renderResolutionScreen();
    }

    confirmResolution() {
        const job = this.getCurrentJob();
        const totalPot = this.getTotalPot();

        if (this.tempResolution.success) {
            // Get claimed amount
            const claimed = parseInt(document.getElementById('claimed-amount').value) || 0;

            if (claimed > totalPot) {
                alert('Claimed amount cannot exceed total pot!');
                return;
            }

            // Calculate new rollover
            this.rollover = totalPot - claimed;

            // Record history
            this.history.push({
                jobIndex: this.currentIndex,
                jobType: job.type,
                success: true,
                basePot: job.pot,
                totalPot: totalPot,
                claimed: claimed,
                rollover: this.rollover
            });
        } else {
            // Failure - entire pot rolls over
            this.rollover += totalPot;

            // Record history
            this.history.push({
                jobIndex: this.currentIndex,
                jobType: job.type,
                success: false,
                basePot: job.pot,
                totalPot: totalPot,
                claimed: 0,
                rollover: this.rollover
            });
        }

        // Check if game is over
        if (job.isFinal) {
            this.saveState();
            this.showScreen('gameover-screen');
            this.renderGameOverScreen();
        } else {
            // Move to next job
            this.currentIndex++;
            this.saveState();
            this.showScreen('job-screen');
            this.renderJobScreen();
        }
    }

    // ========================================
    // UI Management
    // ========================================

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => {
            s.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    renderJobScreen() {
        const job = this.getCurrentJob();
        const totalPot = this.getTotalPot();

        // Job counter
        document.getElementById('job-counter').textContent =
            `Job ${this.currentIndex + 1} of ${this.jobs.length}`;

        // Job details
        document.getElementById('job-type').textContent = job.type.toUpperCase();
        document.getElementById('crew-size').textContent = job.crew;
        document.getElementById('base-pot').textContent = this.formatMoney(job.pot);
        document.getElementById('rollover-amount').textContent =
            this.rollover > 0 ? '+' + this.formatMoney(this.rollover) : '$0';
        document.getElementById('total-pot').textContent = this.formatMoney(totalPot);

        // Show/hide rollover line
        const rolloverLine = document.getElementById('rollover-line');
        if (this.rollover > 0) {
            rolloverLine.style.display = 'flex';
        } else {
            rolloverLine.style.display = 'none';
        }

        // Final job badge
        const finalBadge = document.getElementById('final-badge');
        if (job.isFinal) {
            finalBadge.style.display = 'block';
        } else {
            finalBadge.style.display = 'none';
        }

        // Render history
        this.renderHistory();
    }

    renderHistory() {
        const container = document.getElementById('history');
        container.innerHTML = this.history.map(h => {
            return `<div class="history-dot ${h.success ? 'success' : 'failure'}"
                         title="${h.jobType}: ${h.success ? 'Success' : 'Failure'}">
                    </div>`;
        }).join('');
    }

    renderResolutionScreen() {
        const job = this.getCurrentJob();
        const totalPot = this.getTotalPot();
        const isSuccess = this.tempResolution.success;

        // Set result status
        const resultStatus = document.getElementById('result-status');
        resultStatus.textContent = isSuccess ? 'SUCCESS' : 'FAILURE';
        resultStatus.className = 'result-status ' + (isSuccess ? 'success' : 'failure');

        // Show pot amount
        document.getElementById('pot-was').textContent = this.formatMoney(totalPot);

        // Show/hide appropriate sections
        const successInput = document.getElementById('success-input');
        const failureMessage = document.getElementById('failure-message');

        if (isSuccess) {
            successInput.style.display = 'block';
            failureMessage.style.display = 'none';

            // Set up claimed input
            const claimedInput = document.getElementById('claimed-amount');
            claimedInput.value = '';
            claimedInput.max = totalPot;
            claimedInput.focus();

            // Update rollover preview on input
            claimedInput.oninput = () => {
                const claimed = parseInt(claimedInput.value) || 0;
                const newRollover = Math.max(0, totalPot - claimed);
                document.getElementById('preview-amount').textContent =
                    this.formatMoney(newRollover);
            };

            // Initial preview
            document.getElementById('preview-amount').textContent =
                this.formatMoney(totalPot);
        } else {
            successInput.style.display = 'none';
            failureMessage.style.display = 'block';
        }

        // Update button text
        const btnText = document.getElementById('next-btn-text');
        btnText.textContent = job.isFinal ? 'Finish Game' : 'Next Job';
    }

    renderGameOverScreen() {
        const successCount = this.history.filter(h => h.success).length;
        const failureCount = this.history.filter(h => !h.success).length;

        document.getElementById('total-jobs').textContent = this.history.length;
        document.getElementById('success-count').textContent = successCount;
        document.getElementById('failure-count').textContent = failureCount;

        // Render full history
        const historyFinal = document.getElementById('history-final');
        historyFinal.innerHTML = this.history.map((h, i) => {
            return `
                <div class="history-item ${h.success ? 'success' : 'failure'}">
                    <div class="history-number">${i + 1}</div>
                    <div class="history-details">
                        <div class="history-job">${h.jobType}</div>
                        <div class="history-result">${h.success ? 'Success' : 'Failure'}</div>
                    </div>
                    <div class="history-pot">${this.formatMoney(h.totalPot)}</div>
                </div>
            `;
        }).join('');
    }

    // ========================================
    // Utilities
    // ========================================

    formatMoney(amount) {
        return '$' + amount.toLocaleString();
    }
}

// ========================================
// Initialize
// ========================================

const tracker = new JobTracker();

// Handle page visibility - reload on resume
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        tracker.loadState();
        // Re-render current screen if not on start screen
        if (tracker.jobs.length > 0) {
            if (tracker.currentIndex >= tracker.jobs.length) {
                tracker.showScreen('gameover-screen');
                tracker.renderGameOverScreen();
            } else {
                tracker.showScreen('job-screen');
                tracker.renderJobScreen();
            }
        }
    }
});

// Export for HTML inline handlers
window.tracker = tracker;
