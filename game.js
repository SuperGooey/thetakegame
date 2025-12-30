// ========================================
// THE TAKE - Game Logic
// ========================================

// ========================================
// DATA: Contracts
// ========================================

const CONTRACTS = {
    easy: [
        { name: "Quick Score", category: "greed", objective: "Claim ≥$3,000 on a successful job", bonus: 2000, penalty: 1500, icon: "💰" },
        { name: "Team Player", category: "trust", objective: "Be on a successful crew", bonus: 2000, penalty: 1500, icon: "🤝" },
        { name: "Bet Winner", category: "hustle", objective: "Profit from a bet", bonus: 2000, penalty: 1500, icon: "🎲" },
        { name: "Small Fry", category: "precision", objective: "Claim exactly $2,000 on a job", bonus: 2500, penalty: 1500, icon: "🎯" },
        { name: "Troublemaker", category: "chaos", objective: "Be on a crew that fails", bonus: 2500, penalty: 1500, icon: "💣" },
        { name: "Benchwarmer", category: "hustle", objective: "Be excluded from a crew on a job with pot ≥$14,000", bonus: 2500, penalty: 1500, icon: "🎲" },
        { name: "Momentum", category: "trust", objective: "Be on a successful crew when the previous job also succeeded", bonus: 3000, penalty: 1500, icon: "🤝" },
        { name: "Penny Pincher", category: "greed", objective: "Have ≥$15,000 total chips when completing this contract", bonus: 2500, penalty: 1500, icon: "💰" },
        { name: "Nibble", category: "greed", objective: "Claim ≤$2,000 on a successful job", bonus: 2000, penalty: 1500, icon: "💰" },
        { name: "Lucky Guess", category: "hustle", objective: "Invest on a job that succeeds", bonus: 2000, penalty: 1500, icon: "🎲" },
        { name: "Dodged Bullet", category: "chaos", objective: "Be excluded from a crew that fails", bonus: 2500, penalty: 1500, icon: "💣" },
        { name: "Fair Share", category: "precision", objective: "Claim within $1,000 of (Pot ÷ Crew Size) on a successful job", bonus: 2500, penalty: 1500, icon: "🎯" },
        { name: "Helping Hand", category: "trust", objective: "Be on a crew where total claims ≤80% of pot", bonus: 2500, penalty: 1500, icon: "🤝" },
        { name: "Side Bet", category: "hustle", objective: "Profit ≥$2,000 from a single bet", bonus: 2500, penalty: 1500, icon: "🎲" },
        { name: "Modesty", category: "precision", objective: "Claim the smallest share on a successful crew (no ties)", bonus: 2500, penalty: 1500, icon: "🎯" },
        { name: "Spoiler", category: "chaos", objective: "Be on a crew that fails when the previous job succeeded", bonus: 2500, penalty: 1500, icon: "💣" },
        { name: "Table Scraps", category: "greed", objective: "Claim ≤$1,000 on a job with pot ≥$15,000 that succeeds", bonus: 2500, penalty: 1500, icon: "💰" },
        { name: "Against the Grain", category: "hustle", objective: "Profit from a bet when at least one other player bet the opposite direction", bonus: 2500, penalty: 1500, icon: "🎲" },
        { name: "Second Fiddle", category: "precision", objective: "Claim the second-smallest share on a successful crew of 4+", bonus: 2500, penalty: 1500, icon: "🎯" },
        { name: "Cleanup Crew", category: "trust", objective: "Be on a successful crew when the previous job failed", bonus: 3000, penalty: 1500, icon: "🤝" }
    ],
    medium: [
        { name: "Big Claim", category: "greed", objective: "Claim ≥$5,000 on a successful job", bonus: 3500, penalty: 3000, icon: "💰" },
        { name: "Firestarter", category: "chaos", objective: "A job fails with pot ≥$12,000", bonus: 4000, penalty: 3000, icon: "💣" },
        { name: "Sharpshooter", category: "precision", objective: "Claim within $500 of (Pot ÷ Crew Size) on a successful job", bonus: 4000, penalty: 3000, icon: "🎯" },
        { name: "Smart Money", category: "hustle", objective: "Profit from a bet on a job following a failed job", bonus: 4000, penalty: 3000, icon: "🎲" },
        { name: "Crew Builder", category: "trust", objective: "Be Chair for a successful job", bonus: 3500, penalty: 3000, icon: "🤝" },
        { name: "Smooth Sailing", category: "trust", objective: "Be on a successful crew when the previous job also succeeded and you were on that crew too", bonus: 4500, penalty: 3000, icon: "🤝" },
        { name: "Nest Egg", category: "greed", objective: "Have ≥$22,000 total chips when completing this contract", bonus: 4000, penalty: 3000, icon: "💰" },
        { name: "Calculated Risk", category: "hustle", objective: "Short a job and it fails", bonus: 4000, penalty: 3000, icon: "🎲" },
        { name: "Surgical Strike", category: "chaos", objective: "Be on a crew that fails by ≤$3,000", bonus: 4000, penalty: 3000, icon: "💣" },
        { name: "Tight Crew", category: "precision", objective: "Be on a crew that claims within $1,000 of the pot (success or failure)", bonus: 4500, penalty: 3000, icon: "🎯" },
        { name: "Anchor", category: "trust", objective: "Be on a successful crew where you also claimed ≥$3,000", bonus: 4000, penalty: 3000, icon: "🤝" },
        { name: "Fat Cat", category: "greed", objective: "Have more chips than every other player when completing this contract", bonus: 3500, penalty: 3000, icon: "💰" },
        { name: "Double Down", category: "hustle", objective: "Invest ≥$4,000 on a single job and win", bonus: 4000, penalty: 3000, icon: "🎲" },
        { name: "Repeat Offender", category: "chaos", objective: "Be on a failed crew when the previous job also failed", bonus: 4000, penalty: 3000, icon: "💣" },
        { name: "Razor's Edge", category: "precision", objective: "Be on a crew where total claims equal exactly the pot", bonus: 4500, penalty: 3000, icon: "🎯" },
        { name: "Kingmaker", category: "trust", objective: "Be Chair for a successful job you're not on", bonus: 4000, penalty: 3000, icon: "🤝" },
        { name: "Contrarian", category: "hustle", objective: "Profit from a bet when at least two other players bet the opposite direction and lost", bonus: 4000, penalty: 3000, icon: "🎲" },
        { name: "Restraint", category: "precision", objective: "Claim $0 on a job that succeeds", bonus: 4500, penalty: 3000, icon: "🎯" },
        { name: "Controlled Burn", category: "chaos", objective: "A job fails by ≤$2,000", bonus: 4500, penalty: 3000, icon: "💣" },
        { name: "Lion's Share", category: "greed", objective: "Claim the largest share on a successful crew (no ties)", bonus: 4000, penalty: 3000, icon: "💰" },
        { name: "Trendsetter", category: "precision", objective: "Claim an amount that at least one other crew member also claimed exactly, on a successful job", bonus: 4000, penalty: 3000, icon: "🎯" },
        { name: "Bail Out", category: "trust", objective: "Be on a successful crew on a job with rollover from a previous failure", bonus: 4000, penalty: 3000, icon: "🤝" },
        { name: "Saboteur", category: "chaos", objective: "Be on a failed crew where you claimed more than (Pot ÷ Crew Size)", bonus: 4000, penalty: 3000, icon: "💣" },
        { name: "Steady Hand", category: "trust", objective: "Be on two consecutive successful crews", bonus: 4000, penalty: 3000, icon: "🤝" },
        { name: "High Roller", category: "hustle", objective: "Win a bet of ≥$5,000", bonus: 4500, penalty: 3000, icon: "🎲" }
    ],
    hard: [
        { name: "Kingpin", category: "greed", objective: "Be chip leader by at least $4,000 when completing this contract", bonus: 5500, penalty: 5000, icon: "💰" },
        { name: "Demolition Expert", category: "chaos", objective: "A job fails that has rollover ≥$8,000 from previous failures", bonus: 5000, penalty: 5000, icon: "💣" },
        { name: "Masterstroke", category: "precision", objective: "Claim the largest share on a crew that succeeds by ≤$2,000 margin", bonus: 6000, penalty: 5000, icon: "🎯" },
        { name: "Market Maker", category: "hustle", objective: "Profit ≥$5,000 from betting on a single job", bonus: 5500, penalty: 5000, icon: "🎲" },
        { name: "Untouchable", category: "trust", objective: "Be on a successful crew on the Final Job", bonus: 6000, penalty: 5000, icon: "🤝" },
        { name: "Scorched Earth", category: "chaos", objective: "A job with pot ≥$18,000 (including rollover) fails", bonus: 5500, penalty: 5000, icon: "💣" },
        { name: "Last Laugh", category: "precision", objective: "You claimed the second-highest cut on the crew on The Final Job", bonus: 7000, penalty: 5000, icon: "🎯" },
        { name: "Ironclad", category: "trust", objective: "Be on a successful crew where every crew member claimed ≥$2,000", bonus: 6500, penalty: 5000, icon: "🤝" },
        { name: "All In", category: "hustle", objective: "Bet $6,000 on a single job and win", bonus: 5000, penalty: 5000, icon: "🎲" },
        { name: "Greed is Good", category: "greed", objective: "Claim ≥$6,000 on a successful job", bonus: 5000, penalty: 5000, icon: "💰" },
        { name: "Mirror Match", category: "precision", objective: "Claim an amount that exactly two other crew members also claimed, on any job", bonus: 5500, penalty: 5000, icon: "🎯" },
        { name: "Puppet Master", category: "trust", objective: "Be Chair for a job that succeeds by ≤$2,000 margin", bonus: 6000, penalty: 5000, icon: "🤝" },
        { name: "Oracle", category: "hustle", objective: "Be the only player to bet a direction (all others bet opposite or pass) and win", bonus: 6000, penalty: 5000, icon: "🎲" },
        { name: "Sole Survivor", category: "chaos", objective: "Be the only crew member to claim ≤(Pot ÷ Crew Size) on a failed job", bonus: 5500, penalty: 5000, icon: "💣" },
        { name: "Photo Finish", category: "trust", objective: "Be on a successful crew where total claims are within $500 of the pot", bonus: 7000, penalty: 5000, icon: "🤝" }
    ]
};

// ========================================
// DATA: Jobs
// ========================================

const JOBS = [
    { type: "Small", pot: 8000, crewSize: 3 },
    { type: "Small", pot: 8000, crewSize: 3 },
    { type: "Small", pot: 8000, crewSize: 3 },
    { type: "Medium", pot: 12000, crewSize: 4 },
    { type: "Medium", pot: 12000, crewSize: 4 },
    { type: "Medium", pot: 12000, crewSize: 4 },
    { type: "Medium", pot: 12000, crewSize: 4 },
    { type: "Large", pot: 16000, crewSize: 4 },
    { type: "Large", pot: 16000, crewSize: 4 },
    { type: "Large", pot: 16000, crewSize: 4 },
    { type: "Huge", pot: 20000, crewSize: 5 },
    { type: "Huge", pot: 20000, crewSize: 5 },
    { type: "Final Job", pot: 18000, crewSize: 4, isFinal: true }
];

// ========================================
// GAME STATE
// ========================================

class GameState {
    constructor() {
        this.players = [];
        this.contractDecks = { easy: [], medium: [], hard: [] };
        this.contractBoard = { easy: [], medium: [], hard: [] };
        this.jobDeck = [];
        this.currentJob = null;
        this.currentJobResult = null;
        this.chairIndex = 0;
        this.rollover = 0;
        this.jobHistory = [];
        this.phase = 'setup'; // setup, draft, trading, crew-select, claiming, betting, reveal, complete-contracts
        this.currentPlayerIndex = 0;
        this.draftRound = 0;
        this.crew = [];
        this.claims = {};
        this.bets = {};
    }

    initializeDecks() {
        // Shuffle and create contract decks
        this.contractDecks.easy = this.shuffle([...CONTRACTS.easy]);
        this.contractDecks.medium = this.shuffle([...CONTRACTS.medium]);
        this.contractDecks.hard = this.shuffle([...CONTRACTS.hard]);

        // Shuffle job deck
        const regularJobs = JOBS.filter(j => !j.isFinal);
        const finalJob = JOBS.find(j => j.isFinal);
        this.jobDeck = [...this.shuffle(regularJobs), finalJob];
    }

    refillBoard() {
        const config = this.getBoardConfig();

        ['easy', 'medium', 'hard'].forEach(tier => {
            while (this.contractBoard[tier].length < config[tier] && this.contractDecks[tier].length > 0) {
                this.contractBoard[tier].push(this.contractDecks[tier].pop());
            }
        });
    }

    getBoardConfig() {
        const playerCount = this.players.length;
        if (playerCount <= 6) {
            return { easy: 2, medium: 2, hard: 2 };
        } else if (playerCount <= 9) {
            return { easy: 3, medium: 3, hard: 2 };
        } else {
            return { easy: 4, medium: 4, hard: 3 };
        }
    }

    shuffle(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    drawJob() {
        if (this.jobDeck.length > 0) {
            this.currentJob = this.jobDeck.shift();
            return this.currentJob;
        }
        return null;
    }

    getChair() {
        return this.players[this.chairIndex];
    }

    rotateChair() {
        // Chair goes to player with lowest chips
        let minChips = Math.min(...this.players.map(p => p.chips));
        let candidates = this.players
            .map((p, i) => ({ player: p, index: i }))
            .filter(({ player }) => player.chips === minChips);

        // If tie, first player clockwise from current chair
        if (candidates.length > 1) {
            for (let i = 1; i <= this.players.length; i++) {
                const index = (this.chairIndex + i) % this.players.length;
                if (candidates.some(c => c.index === index)) {
                    this.chairIndex = index;
                    return;
                }
            }
        }

        this.chairIndex = candidates[0].index;
    }

    getCurrentPlayer() {
        return this.players[this.currentPlayerIndex];
    }

    nextPlayer() {
        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
    }

    checkSetBonuses(player) {
        const bonuses = [];
        const rapSheet = player.rapSheet;

        // Count contracts per category
        const counts = {
            precision: rapSheet.precision.length,
            chaos: rapSheet.chaos.length,
            trust: rapSheet.trust.length,
            greed: rapSheet.greed.length,
            hustle: rapSheet.hustle.length
        };

        const total = Object.values(counts).reduce((a, b) => a + b, 0);

        // Specialist (3 in one category)
        if (!player.setBonuses.includes('Specialist')) {
            for (const [cat, count] of Object.entries(counts)) {
                if (count >= 3) {
                    bonuses.push({ name: 'Specialist', bonus: 4000 });
                    break;
                }
            }
        }

        // Obsessed (4 in one category)
        if (!player.setBonuses.includes('Obsessed')) {
            for (const [cat, count] of Object.entries(counts)) {
                if (count >= 4) {
                    bonuses.push({ name: 'Obsessed', bonus: 7000 });
                    break;
                }
            }
        }

        // Versatile (1 in each category)
        if (!player.setBonuses.includes('Versatile')) {
            if (Object.values(counts).every(c => c >= 1)) {
                bonuses.push({ name: 'Versatile', bonus: 5000 });
            }
        }

        // Legend (6 total)
        if (!player.setBonuses.includes('Legend') && total >= 6) {
            bonuses.push({ name: 'Legend', bonus: 6000 });
        }

        // Mastermind (3+3 in two different categories)
        if (!player.setBonuses.includes('Mastermind')) {
            const threeOrMore = Object.values(counts).filter(c => c >= 3).length;
            if (threeOrMore >= 2) {
                bonuses.push({ name: 'Mastermind', bonus: 10000 });
            }
        }

        return bonuses;
    }
}

// ========================================
// GAME CLASS
// ========================================

class Game {
    constructor() {
        this.state = new GameState();
        this.loadState();
    }

    // State Management
    saveState() {
        localStorage.setItem('thetake-save', JSON.stringify(this.state));
    }

    loadState() {
        const saved = localStorage.getItem('thetake-save');
        if (saved) {
            try {
                this.state = Object.assign(new GameState(), JSON.parse(saved));
            } catch (e) {
                console.error('Failed to load state:', e);
            }
        }
    }

    reset() {
        localStorage.removeItem('thetake-save');
        window.location.reload();
    }

    // Setup
    addPlayerInput() {
        const container = document.getElementById('player-inputs');
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Player ${container.children.length + 1} Name`;
        input.required = true;
        container.appendChild(input);
    }

    startGame() {
        const inputs = document.querySelectorAll('#player-inputs input');
        const names = Array.from(inputs).map(i => i.value.trim()).filter(n => n);

        if (names.length < 5 || names.length > 12) {
            alert('Please enter 5-12 player names');
            return;
        }

        // Initialize players
        this.state.players = names.map((name, i) => ({
            id: i,
            name,
            chips: 10000,
            hand: [],
            rapSheet: {
                precision: [],
                chaos: [],
                trust: [],
                greed: [],
                hustle: []
            },
            setBonuses: [],
            jobHistory: []
        }));

        // Initialize decks
        this.state.initializeDecks();
        this.state.refillBoard();

        // Initial draft
        this.state.chairIndex = Math.floor(Math.random() * this.state.players.length);
        this.state.currentPlayerIndex = this.state.chairIndex;
        this.state.phase = 'initial-draft';

        this.saveState();
        this.showScreen('game-screen');
        this.render();
    }

    // UI Management
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
    }

    showModal(title, message, callback) {
        const modal = document.getElementById('modal');
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-message').textContent = message;
        document.getElementById('modal-btn').onclick = () => {
            modal.classList.remove('active');
            if (callback) callback();
        };
        modal.classList.add('active');
    }

    // Rendering
    render() {
        this.renderPlayerStatus();
        this.renderContractBoard();
        this.renderPhase();
        this.saveState();
    }

    renderPlayerStatus() {
        const container = document.getElementById('player-status');
        container.innerHTML = this.state.players.map((p, i) => `
            <div class="player-card ${i === this.state.chairIndex ? 'chair' : ''} ${i === this.state.currentPlayerIndex ? 'active' : ''}">
                <div class="name">${p.name}${i === this.state.chairIndex ? ' 👑' : ''}</div>
                <div class="chips">$${p.chips.toLocaleString()}</div>
                <div class="contracts">${p.hand.length} in hand • ${Object.values(p.rapSheet).flat().length} completed</div>
            </div>
        `).join('');
    }

    renderContractBoard() {
        ['easy', 'medium', 'hard'].forEach(tier => {
            const container = document.getElementById(`${tier}-contracts`);
            container.innerHTML = this.state.contractBoard[tier].map((contract, index) =>
                this.renderContractCard(contract, tier, index)
            ).join('');
        });
    }

    renderContractCard(contract, tier, index, options = {}) {
        const disabled = options.disabled ? 'disabled' : '';
        const selected = options.selected ? 'selected' : '';
        const onClick = options.onClick || `game.selectContract('${tier}', ${index})`;

        return `
            <div class="contract-card ${disabled} ${selected}"
                 data-category="${contract.category}"
                 onclick="${disabled ? '' : onClick}">
                <div class="contract-header">
                    <div class="contract-name">${contract.name}</div>
                    <div class="contract-category">${contract.icon}</div>
                </div>
                <div class="contract-objective">${contract.objective}</div>
                <div class="contract-footer">
                    <div class="contract-bonus">+$${contract.bonus.toLocaleString()}</div>
                    <div class="contract-penalty">-$${contract.penalty.toLocaleString()}</div>
                </div>
            </div>
        `;
    }

    renderPhase() {
        const phaseIndicator = document.getElementById('phase-indicator');
        const potDisplay = document.getElementById('pot-display');
        const actionArea = document.getElementById('action-area');

        // Update pot display
        if (this.state.currentJob) {
            const totalPot = this.state.currentJob.pot + this.state.rollover;
            potDisplay.textContent = `POT: $${totalPot.toLocaleString()}`;
        } else {
            potDisplay.textContent = '';
        }

        // Phase-specific rendering
        switch (this.state.phase) {
            case 'initial-draft':
                phaseIndicator.textContent = 'INITIAL DRAFT';
                this.renderDraftPhase(true);
                break;
            case 'draft':
                phaseIndicator.textContent = 'CONTRACT DRAFT';
                this.renderDraftPhase(false);
                break;
            case 'trading':
                phaseIndicator.textContent = 'BLACK MARKET (60s)';
                this.renderTradingPhase();
                break;
            case 'job-reveal':
                phaseIndicator.textContent = 'JOB REVEAL';
                this.renderJobReveal();
                break;
            case 'crew-select':
                phaseIndicator.textContent = 'CREW SELECTION';
                this.renderCrewSelection();
                break;
            case 'claiming':
                phaseIndicator.textContent = 'WRITE CLAIMS';
                this.renderClaimingPhase();
                break;
            case 'betting':
                phaseIndicator.textContent = 'PLACE BETS';
                this.renderBettingPhase();
                break;
            case 'reveal':
                phaseIndicator.textContent = 'RESOLUTION';
                this.renderRevealPhase();
                break;
            case 'complete-contracts':
                phaseIndicator.textContent = 'COMPLETE CONTRACTS';
                this.renderCompleteContractsPhase();
                break;
        }
    }

    renderDraftPhase(isInitial) {
        const actionArea = document.getElementById('action-area');
        const currentPlayer = this.state.getCurrentPlayer();

        actionArea.innerHTML = `
            <div style="text-align: center;">
                <p style="margin-bottom: 1rem; font-family: var(--font-mono);">
                    ${currentPlayer.name}'s turn to draft
                </p>
                <button class="btn-primary" onclick="game.passDraft()">Pass</button>
            </div>
        `;
    }

    selectContract(tier, index) {
        const currentPlayer = this.state.getCurrentPlayer();
        const contract = this.state.contractBoard[tier][index];

        // Add to player's hand
        currentPlayer.hand.push({ ...contract, tier });

        // Remove from board
        this.state.contractBoard[tier].splice(index, 1);

        // Next player or end draft
        this.state.nextPlayer();

        if (this.state.currentPlayerIndex === this.state.chairIndex) {
            // Round complete
            if (this.state.phase === 'initial-draft') {
                // Initial draft done, start first job
                this.startBetweenJobs();
            } else {
                // Regular draft done
                this.state.phase = 'trading';
            }
        }

        this.render();
    }

    passDraft() {
        this.state.nextPlayer();

        if (this.state.currentPlayerIndex === this.state.chairIndex) {
            if (this.state.phase === 'initial-draft') {
                this.startBetweenJobs();
            } else {
                this.state.phase = 'trading';
            }
        }

        this.render();
    }

    startBetweenJobs() {
        this.state.rotateChair();
        this.state.currentPlayerIndex = this.state.chairIndex;
        this.state.phase = 'draft';
        this.state.refillBoard();
        this.render();

        // After one draft round, go to trading then job
        setTimeout(() => {
            this.showModal(
                'Contract Draft',
                'Starting contract draft. Chair goes first, then clockwise. Select a contract or pass.',
                null
            );
        }, 500);
    }

    renderTradingPhase() {
        const actionArea = document.getElementById('action-area');
        actionArea.innerHTML = `
            <div style="text-align: center;">
                <p style="margin-bottom: 1rem;">Black Market: Players may trade contracts and chips</p>
                <p style="margin-bottom: 1rem; color: var(--muted); font-size: 0.875rem;">
                    (This is handled manually - negotiate freely!)
                </p>
                <button class="btn-primary" onclick="game.endTrading()">End Trading & Start Job</button>
            </div>
        `;
    }

    endTrading() {
        this.state.refillBoard();
        this.state.phase = 'job-reveal';
        this.state.drawJob();
        this.render();
    }

    renderJobReveal() {
        const job = this.state.currentJob;
        const totalPot = job.pot + this.state.rollover;
        const jobSection = document.getElementById('job-section');

        jobSection.innerHTML = `
            <div class="job-card">
                <div class="job-title">${job.type}${job.isFinal ? ' 🎯' : ''}</div>
                <div class="job-details">
                    <div class="job-pot">POT: $${totalPot.toLocaleString()}</div>
                    <div class="job-crew">CREW: ${job.crewSize}</div>
                </div>
                ${this.state.rollover > 0 ? `<div style="color: var(--danger); margin-top: 1rem;">+$${this.state.rollover.toLocaleString()} ROLLOVER</div>` : ''}
            </div>
        `;

        const actionArea = document.getElementById('action-area');
        actionArea.innerHTML = `
            <button class="btn-primary" onclick="game.startCrewSelection()">
                Chair: Select Crew
            </button>
        `;
    }

    startCrewSelection() {
        this.state.phase = 'crew-select';
        this.state.crew = [];
        this.render();
    }

    renderCrewSelection() {
        const jobSection = document.getElementById('job-section');
        const job = this.state.currentJob;
        const chair = this.state.getChair();

        const playerButtons = this.state.players.map((p, i) => {
            const isSelected = this.state.crew.includes(i);
            return `
                <button
                    class="btn-primary ${isSelected ? 'selected' : ''}"
                    onclick="game.toggleCrew(${i})"
                    style="${isSelected ? 'background: var(--accent); color: var(--bg);' : ''}"
                >
                    ${p.name}
                </button>
            `;
        }).join('');

        jobSection.innerHTML += `
            <div class="crew-selection">
                <h3>Chair (${chair.name}): Select ${job.crewSize} crew members</h3>
                <p style="margin-bottom: 1rem; color: var(--muted);">
                    Selected: ${this.state.crew.length} / ${job.crewSize}
                </p>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
                    ${playerButtons}
                </div>
            </div>
        `;

        const actionArea = document.getElementById('action-area');
        actionArea.innerHTML = `
            <button
                class="btn-primary"
                ${this.state.crew.length !== job.crewSize ? 'disabled' : ''}
                onclick="game.confirmCrew()"
            >
                Confirm Crew
            </button>
        `;
    }

    toggleCrew(playerIndex) {
        const idx = this.state.crew.indexOf(playerIndex);
        if (idx >= 0) {
            this.state.crew.splice(idx, 1);
        } else {
            if (this.state.crew.length < this.state.currentJob.crewSize) {
                this.state.crew.push(playerIndex);
            }
        }
        this.render();
    }

    confirmCrew() {
        this.state.phase = 'claiming';
        this.state.currentPlayerIndex = this.state.crew[0];
        this.state.claims = {};
        this.render();
    }

    renderClaimingPhase() {
        const actionArea = document.getElementById('action-area');
        const crew = this.state.crew.map(i => this.state.players[i]);
        const totalPot = this.state.currentJob.pot + this.state.rollover;

        // Check if all claims are in
        const allClaimed = this.state.crew.every(i => this.state.claims[i] !== undefined);

        if (allClaimed) {
            actionArea.innerHTML = `
                <button class="btn-primary" onclick="game.startBetting()">
                    All Claims Submitted → Betting Phase
                </button>
            `;
        } else {
            const unclaimedCrew = this.state.crew.filter(i => this.state.claims[i] === undefined);
            const nextPlayer = this.state.players[unclaimedCrew[0]];

            actionArea.innerHTML = `
                <div style="text-align: center;">
                    <p style="margin-bottom: 1rem; font-family: var(--font-mono);">
                        ${nextPlayer.name}: Enter your claim (Pot: $${totalPot.toLocaleString()})
                    </p>
                    <input
                        type="number"
                        id="claim-input"
                        min="0"
                        max="${totalPot}"
                        step="1000"
                        placeholder="0"
                    />
                    <button class="btn-primary" onclick="game.submitClaim()">Submit Claim</button>
                </div>
            `;
        }
    }

    submitClaim() {
        const input = document.getElementById('claim-input');
        const claim = parseInt(input.value) || 0;
        const unclaimedCrew = this.state.crew.filter(i => this.state.claims[i] === undefined);
        const playerIndex = unclaimedCrew[0];

        this.state.claims[playerIndex] = claim;
        this.render();
    }

    startBetting() {
        this.state.phase = 'betting';
        this.state.bets = {};
        this.render();
    }

    renderBettingPhase() {
        const actionArea = document.getElementById('action-area');
        const nonCrew = this.state.players
            .map((p, i) => ({ player: p, index: i }))
            .filter(({ index }) => !this.state.crew.includes(index));

        const allBet = nonCrew.every(({ index }) => this.state.bets[index] !== undefined);

        if (allBet || nonCrew.length === 0) {
            actionArea.innerHTML = `
                <button class="btn-primary" onclick="game.revealClaims()">
                    Reveal Claims & Resolve
                </button>
            `;
        } else {
            const unbetPlayers = nonCrew.filter(({ index }) => this.state.bets[index] === undefined);
            const nextPlayer = unbetPlayers[0].player;
            const nextIndex = unbetPlayers[0].index;

            actionArea.innerHTML = `
                <div style="text-align: center;">
                    <p style="margin-bottom: 1rem; font-family: var(--font-mono);">
                        ${nextPlayer.name}: Place your bet (Chips: $${nextPlayer.chips.toLocaleString()})
                    </p>
                    <div style="margin-bottom: 1rem;">
                        <input
                            type="number"
                            id="bet-amount"
                            min="0"
                            max="6000"
                            step="1000"
                            placeholder="0"
                        />
                    </div>
                    <button class="btn-primary" onclick="game.placeBet(${nextIndex}, 'invest')">Invest (Success)</button>
                    <button class="btn-danger" onclick="game.placeBet(${nextIndex}, 'short')">Short (Failure)</button>
                    <button onclick="game.placeBet(${nextIndex}, 'pass')">Pass</button>
                </div>
            `;
        }
    }

    placeBet(playerIndex, type) {
        if (type === 'pass') {
            this.state.bets[playerIndex] = { type: 'pass', amount: 0 };
        } else {
            const amount = parseInt(document.getElementById('bet-amount').value) || 0;
            const player = this.state.players[playerIndex];

            if (amount > player.chips) {
                alert('Not enough chips!');
                return;
            }

            if (amount > 6000) {
                alert('Maximum bet is $6,000');
                return;
            }

            this.state.bets[playerIndex] = { type, amount };
            player.chips -= amount;
        }

        this.render();
    }

    revealClaims() {
        this.state.phase = 'reveal';

        // Calculate result
        const totalClaims = this.state.crew.reduce((sum, i) => sum + this.state.claims[i], 0);
        const totalPot = this.state.currentJob.pot + this.state.rollover;
        const success = totalClaims <= totalPot;
        const margin = totalPot - totalClaims;

        this.state.currentJobResult = {
            success,
            totalClaims,
            totalPot,
            margin,
            crew: this.state.crew,
            claims: { ...this.state.claims },
            bets: { ...this.state.bets }
        };

        // Apply results
        if (success) {
            // Pay crew
            this.state.crew.forEach(i => {
                this.state.players[i].chips += this.state.claims[i];
            });

            // Pay investors
            Object.entries(this.state.bets).forEach(([i, bet]) => {
                if (bet.type === 'invest') {
                    this.state.players[i].chips += bet.amount * 2;
                }
            });

            // Rollover unclaimed
            this.state.rollover = margin;
        } else {
            // Crew gets nothing, pay shorters
            Object.entries(this.state.bets).forEach(([i, bet]) => {
                if (bet.type === 'short') {
                    this.state.players[i].chips += bet.amount * 2;
                }
            });

            // Rollover entire pot
            this.state.rollover += totalPot;
        }

        // Record history
        this.state.jobHistory.push(this.state.currentJobResult);

        this.render();
        this.renderRevealPhase();
    }

    renderRevealPhase() {
        const result = this.state.currentJobResult;
        const jobSection = document.getElementById('job-section');

        const claimsHtml = this.state.crew.map(i => {
            const player = this.state.players[i];
            const claim = this.state.claims[i];
            return `<div>${player.name}: $${claim.toLocaleString()}</div>`;
        }).join('');

        const betsHtml = Object.entries(this.state.bets)
            .filter(([_, bet]) => bet.type !== 'pass')
            .map(([i, bet]) => {
                const player = this.state.players[i];
                const won = (bet.type === 'invest' && result.success) || (bet.type === 'short' && !result.success);
                return `<div>${player.name}: ${bet.type} $${bet.amount.toLocaleString()} ${won ? '✓' : '✗'}</div>`;
            }).join('');

        jobSection.innerHTML += `
            <div class="resolution">
                <h2 style="color: ${result.success ? 'var(--accent)' : 'var(--danger)'};">
                    ${result.success ? 'SUCCESS' : 'FAILURE'}
                </h2>
                <div style="font-family: var(--font-mono); margin: 2rem 0;">
                    <div>Total Claims: $${result.totalClaims.toLocaleString()}</div>
                    <div>Total Pot: $${result.totalPot.toLocaleString()}</div>
                    <div>Margin: ${result.success ? `+$${result.margin.toLocaleString()}` : `-$${Math.abs(result.margin).toLocaleString()}`}</div>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                    <div>
                        <h3>Claims</h3>
                        ${claimsHtml}
                    </div>
                    <div>
                        <h3>Bets</h3>
                        ${betsHtml || '<div style="color: var(--muted);">No bets placed</div>'}
                    </div>
                </div>
            </div>
        `;

        const actionArea = document.getElementById('action-area');
        actionArea.innerHTML = `
            <button class="btn-primary" onclick="game.startCompleteContracts()">
                Complete Contracts
            </button>
        `;
    }

    startCompleteContracts() {
        this.state.phase = 'complete-contracts';
        this.render();
    }

    renderCompleteContractsPhase() {
        const actionArea = document.getElementById('action-area');
        actionArea.innerHTML = `
            <div style="text-align: center;">
                <p style="margin-bottom: 1rem;">
                    Players: Review your contracts and complete any that you've fulfilled this round.
                </p>
                <p style="margin-bottom: 1rem; color: var(--muted); font-size: 0.875rem;">
                    (This is done manually - check your hand and the job results)
                </p>
                ${this.state.currentJob.isFinal ?
                    `<button class="btn-primary" onclick="game.endGame()">Finish Game & Score</button>` :
                    `<button class="btn-primary" onclick="game.nextJob()">Next Job</button>`
                }
            </div>
        `;
    }

    nextJob() {
        if (this.state.jobDeck.length > 0) {
            this.state.currentJob = null;
            this.state.currentJobResult = null;
            this.state.crew = [];
            this.state.claims = {};
            this.state.bets = {};
            this.startBetweenJobs();
        } else {
            this.endGame();
        }
    }

    endGame() {
        // Calculate final scores
        this.state.players.forEach(p => {
            let score = p.chips;

            // Subtract penalties for incomplete contracts
            p.hand.forEach(contract => {
                score -= contract.penalty;
            });

            p.finalScore = score;
        });

        // Sort by score
        this.state.players.sort((a, b) => b.finalScore - a.finalScore);

        this.state.phase = 'scoring';
        this.showScreen('scoring-screen');
        this.renderScoring();
    }

    renderScoring() {
        const container = document.getElementById('final-scores');
        container.innerHTML = `
            <div style="max-width: 800px; margin: 0 auto;">
                ${this.state.players.map((p, i) => `
                    <div style="
                        padding: var(--space-lg);
                        border: var(--border-width) solid ${i === 0 ? 'var(--accent)' : 'var(--border)'};
                        margin-bottom: var(--space-md);
                        ${i === 0 ? 'background: rgba(0, 255, 0, 0.1);' : ''}
                    ">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <div style="font-family: var(--font-mono); font-size: 1.5rem;">
                                    ${i + 1}. ${p.name} ${i === 0 ? '🏆' : ''}
                                </div>
                                <div style="color: var(--muted); margin-top: 0.5rem;">
                                    Chips: $${p.chips.toLocaleString()} •
                                    Completed: ${Object.values(p.rapSheet).flat().length} •
                                    Penalties: -$${p.hand.reduce((sum, c) => sum + c.penalty, 0).toLocaleString()}
                                </div>
                            </div>
                            <div style="font-family: var(--font-mono); font-size: 2rem; color: var(--greed);">
                                $${p.finalScore.toLocaleString()}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

// ========================================
// Initialize
// ========================================

const game = new Game();

// Add initial player inputs
document.addEventListener('DOMContentLoaded', () => {
    if (game.state.phase === 'setup') {
        for (let i = 0; i < 5; i++) {
            game.addPlayerInput();
        }
    } else {
        // Resume game
        game.showScreen('game-screen');
        game.render();
    }
});

// Export for use in HTML
window.game = game;
