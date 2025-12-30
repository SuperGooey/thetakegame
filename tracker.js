// ========================================
// THE TAKE - Job Tracker
// ========================================

// ========================================
// Translations
// ========================================

const TRANSLATIONS = {
    en: {
        // UI Elements
        subtitle: "Job Tracker",
        rules_button: "Rules",
        start_game: "Start New Game",
        view_rules: "View Rules",
        crew_label: "CREW",
        base_pot_label: "Base Pot",
        rollover_label: "Rollover",
        total_pot_label: "Total Pot",
        final_job: "FINAL JOB",
        success_btn: "SUCCESS",
        failure_btn: "FAILURE",
        pot_was_label: "Total Pot Was",
        claimed_amount_label: "Amount Claimed by Crew",
        rollover_preview: "Rollover:",
        failure_message: "Entire pot rolls over to next job",
        next_job: "Next Job",
        finish_game: "Finish Game",
        game_complete: "GAME COMPLETE",
        total_jobs: "Total Jobs",
        successful: "Successful",
        failed: "Failed",
        new_game: "New Game",

        // Job Types
        job_small: "SMALL JOB",
        job_medium: "MEDIUM JOB",
        job_large: "LARGE JOB",
        job_huge: "HUGE JOB",
        job_final: "FINAL JOB",

        // Rules
        rules_title: "How to Play",
        rules_overview_title: "Game Overview",
        rules_overview_text: "THE TAKE is a game of heists, greed, and betrayal for 5–12 players. You're freelance criminals working jobs together, but everyone has their own agenda through secret contracts.",
        rules_objective_title: "Objective",
        rules_objective_text: "Earn the most money by the end of the game through successful heists, completing contracts, and strategic betting. The player with the most money (minus penalties for incomplete contracts) wins.",
        rules_howjobs_title: "How Jobs Work",
        rules_howjobs_1: "The Chair selects a crew for the job",
        rules_howjobs_2: "Each crew member secretly writes their claim (how much money they want)",
        rules_howjobs_3: "Non-crew players bet on success or failure",
        rules_howjobs_4: "Claims are revealed simultaneously",
        rules_howjobs_5: "If total claims ≤ pot: SUCCESS (everyone gets paid)",
        rules_howjobs_6: "If total claims > pot: FAILURE (crew gets nothing)",
        rules_success_title: "Job Success",
        rules_success_text: "Each crew member receives their claimed amount. Investors get 2× their bet. Unclaimed money rolls over to the next job.",
        rules_failure_title: "Job Failure",
        rules_failure_text: "Crew receives nothing. Shorters get 2× their bet. The entire pot rolls over to the next job, making it more tempting and dangerous.",
        rules_contracts_title: "Contracts",
        rules_contracts_text: "Players have secret contracts with specific objectives (e.g., \"Be on a successful crew\" or \"Claim exactly $2,000\"). Complete them for bonuses. Incomplete contracts cost you money at game end.",
        rules_tracker_title: "Using This Tracker",
        rules_tracker_text: "This app tracks the job deck and calculates rollovers automatically. Players manage their own chips, contracts, and betting using physical components. After each job, mark it as SUCCESS or FAILURE in the tracker.",

        // Dynamic text
        job_counter: (current, total) => `Job ${current} of ${total}`,
        history_title: (job, result) => `${job}: ${result}`
    },
    es: {
        // UI Elements
        subtitle: "Seguimiento de Trabajos",
        rules_button: "Reglas",
        start_game: "Comenzar Nuevo Juego",
        view_rules: "Ver Reglas",
        crew_label: "EQUIPO",
        base_pot_label: "Bote Base",
        rollover_label: "Acumulado",
        total_pot_label: "Bote Total",
        final_job: "TRABAJO FINAL",
        success_btn: "ÉXITO",
        failure_btn: "FRACASO",
        pot_was_label: "El Bote Total Era",
        claimed_amount_label: "Cantidad Reclamada por el Equipo",
        rollover_preview: "Acumulado:",
        failure_message: "Todo el bote se acumula para el próximo trabajo",
        next_job: "Próximo Trabajo",
        finish_game: "Terminar Juego",
        game_complete: "JUEGO COMPLETO",
        total_jobs: "Trabajos Totales",
        successful: "Exitosos",
        failed: "Fracasados",
        new_game: "Nuevo Juego",

        // Job Types
        job_small: "TRABAJO PEQUEÑO",
        job_medium: "TRABAJO MEDIANO",
        job_large: "TRABAJO GRANDE",
        job_huge: "TRABAJO ENORME",
        job_final: "TRABAJO FINAL",

        // Rules
        rules_title: "Cómo Jugar",
        rules_overview_title: "Resumen del Juego",
        rules_overview_text: "THE TAKE es un juego de robos, codicia y traición para 5–12 jugadores. Eres un criminal independiente trabajando en golpes junto con otros, pero todos tienen su propia agenda a través de contratos secretos.",
        rules_objective_title: "Objetivo",
        rules_objective_text: "Gana la mayor cantidad de dinero al final del juego a través de atracos exitosos, completando contratos y apostando estratégicamente. El jugador con más dinero (menos penalizaciones por contratos incompletos) gana.",
        rules_howjobs_title: "Cómo Funcionan los Trabajos",
        rules_howjobs_1: "El Jefe selecciona un equipo para el trabajo",
        rules_howjobs_2: "Cada miembro del equipo escribe secretamente su reclamo (cuánto dinero quiere)",
        rules_howjobs_3: "Los jugadores que no están en el equipo apuestan por éxito o fracaso",
        rules_howjobs_4: "Los reclamos se revelan simultáneamente",
        rules_howjobs_5: "Si reclamos totales ≤ bote: ÉXITO (todos cobran)",
        rules_howjobs_6: "Si reclamos totales > bote: FRACASO (el equipo no recibe nada)",
        rules_success_title: "Trabajo Exitoso",
        rules_success_text: "Cada miembro del equipo recibe la cantidad reclamada. Los inversores obtienen 2× su apuesta. El dinero no reclamado se acumula para el próximo trabajo.",
        rules_failure_title: "Trabajo Fracasado",
        rules_failure_text: "El equipo no recibe nada. Los que apostaron contra obtienen 2× su apuesta. Todo el bote se acumula para el próximo trabajo, haciéndolo más tentador y peligroso.",
        rules_contracts_title: "Contratos",
        rules_contracts_text: "Los jugadores tienen contratos secretos con objetivos específicos (ej., \"Estar en un equipo exitoso\" o \"Reclamar exactamente $2,000\"). Complételos para obtener bonificaciones. Los contratos incompletos te cuestan dinero al final del juego.",
        rules_tracker_title: "Usando Este Rastreador",
        rules_tracker_text: "Esta aplicación rastrea el mazo de trabajos y calcula acumulados automáticamente. Los jugadores manejan sus propias fichas, contratos y apuestas usando componentes físicos. Después de cada trabajo, márcalo como ÉXITO o FRACASO en el rastreador.",

        // Dynamic text
        job_counter: (current, total) => `Trabajo ${current} de ${total}`,
        history_title: (job, result) => `${job}: ${result}`
    }
};

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
        this.language = localStorage.getItem('thetake-language') || 'en';
        this.loadState();
        this.updateLanguageUI();
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
    // Language Management
    // ========================================

    setLanguage(lang) {
        this.language = lang;
        localStorage.setItem('thetake-language', lang);
        this.updateLanguageUI();

        // Re-render current screen if in game
        if (this.jobs.length > 0) {
            if (this.currentIndex >= this.jobs.length) {
                this.renderGameOverScreen();
            } else {
                this.renderJobScreen();
            }
        }
    }

    t(key, ...args) {
        const translation = TRANSLATIONS[this.language][key];
        if (typeof translation === 'function') {
            return translation(...args);
        }
        return translation || key;
    }

    updateLanguageUI() {
        // Update language selector buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.dataset.lang === this.language) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update all translatable elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            el.textContent = this.t(key);
        });
    }

    // ========================================
    // Rules Panel
    // ========================================

    toggleRules() {
        const panel = document.getElementById('rules-panel');
        panel.classList.toggle('open');
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
            this.t('job_counter', this.currentIndex + 1, this.jobs.length);

        // Job details - translate job type
        const jobTypeKey = `job_${job.type.toLowerCase().replace(' ', '_')}`;
        document.getElementById('job-type').textContent = this.t(jobTypeKey);
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

        // Update translatable UI
        this.updateLanguageUI();

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
        resultStatus.textContent = isSuccess ? this.t('success_btn') : this.t('failure_btn');
        resultStatus.className = 'result-title ' + (isSuccess ? 'success' : 'failure');

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
        btnText.textContent = job.isFinal ? this.t('finish_game') : this.t('next_job');

        // Update translatable UI
        this.updateLanguageUI();
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
            const resultText = h.success ? this.t('success_btn') : this.t('failure_btn');
            return `
                <div class="history-item ${h.success ? 'success' : 'failure'}">
                    <div class="history-number">${i + 1}</div>
                    <div class="history-details">
                        <div class="history-job">${h.jobType}</div>
                        <div class="history-result">${resultText}</div>
                    </div>
                    <div class="history-pot">${this.formatMoney(h.totalPot)}</div>
                </div>
            `;
        }).join('');

        // Update translatable UI
        this.updateLanguageUI();
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
