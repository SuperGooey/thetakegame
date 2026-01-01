// ========================================
// THE TAKE - Digital Game Engine
// Mobile-First • Pass-and-Play Optimized
// ========================================

// ========================================
// TRANSLATIONS
// ========================================

const TRANSLATIONS = {
    en: {
        // UI Elements
        subtitle: "A Game of Heists, Greed & Betrayal",
        rules_button: "Rules",
        setup_title: "Game Setup",
        setup_hint: "Enter player names (5-12 players)",
        add_player: "+ Add Player",
        start_game: "Start Game",
        view_rules: "View Rules",
        continue: "Continue",
        new_game: "New Game",
        game_over: "Game Over",
        final_standings: "Final Standings",

        // Game phases
        phase_label: "Phase",
        phase_initial_draft: "Initial Draft",
        phase_draft: "Contract Draft",
        phase_trading: "Black Market",
        phase_job_reveal: "Job Reveal",
        phase_crew_select: "Crew Selection",
        phase_claiming: "Write Claims",
        phase_betting: "Place Bets",
        phase_reveal: "Resolution",
        phase_complete: "Complete Contracts",

        // Contract board
        contract_board: "Contract Board",
        tier_easy: "Easy",
        tier_medium: "Medium",
        tier_hard: "Hard",

        // Dashboard
        current_player: "Current Player",
        your_hand: "Your Hand",
        rap_sheet: "Rap Sheet",
        chips: "Chips",
        in_hand: "in hand",
        completed: "completed",

        // Job
        job_small: "Small Job",
        job_medium: "Medium Job",
        job_large: "Large Job",
        job_huge: "Huge Job",
        job_final: "Final Job",
        pot: "Pot",
        crew_size: "Crew",
        rollover: "Rollover",
        final_job_badge: "FINAL JOB",

        // Actions
        select_contract: "Select a contract or pass",
        pass: "Pass",
        draft_turn: "'s turn to draft",
        end_trading: "End Trading & Start Job",
        trading_hint: "Players may trade contracts and chips freely",
        start_crew_selection: "Chair: Select Crew",
        select_crew: "Select crew members",
        selected: "Selected",
        confirm_crew: "Confirm Crew",
        enter_claim: "Enter your claim",
        submit_claim: "Submit Claim",
        all_claims_in: "All Claims Submitted",
        start_betting: "Proceed to Betting",
        place_bet: "Place your bet",
        max_bet: "Max bet: $6,000",
        invest: "Invest",
        short: "Short",
        reveal_claims: "Reveal & Resolve",

        // Resolution
        success: "SUCCESS",
        failure: "FAILURE",
        total_claims: "Total Claims",
        total_pot: "Total Pot",
        margin: "Margin",
        claims: "Claims",
        bets: "Bets",
        no_bets: "No bets placed",
        complete_contracts_hint: "Review your contracts and complete any fulfilled this round",
        next_job: "Next Job",
        finish_game: "Finish Game",

        // Modal
        pass_device: "Pass Device",
        pass_to: "Pass the device to",
        ready_message: "Make sure no one else can see the screen",

        // Scoring
        chips_label: "Chips",
        completed_label: "Completed",
        penalties_label: "Penalties",
        winner: "Winner",

        // Categories
        precision: "Precision",
        chaos: "Chaos",
        trust: "Trust",
        greed: "Greed",
        hustle: "Hustle",

        // Set bonuses
        specialist: "Specialist",
        versatile: "Versatile",
        obsessed: "Obsessed",
        legend: "Legend",
        mastermind: "Mastermind",

        // Rules
        rules_title: "How to Play",
        rules_overview_title: "Game Overview",
        rules_overview_text: "THE TAKE is a game of heists, greed, and betrayal for 5-12 players. You're freelance criminals working jobs together, but everyone has their own agenda through secret contracts.",
        rules_objective_title: "Objective",
        rules_objective_text: "Earn the most money by the end of the game through successful heists, completing contracts, and strategic betting. The player with the most money (minus penalties for incomplete contracts) wins.",
        rules_setup_title: "Setup",
        rules_setup_text: "Each player starts with $10,000. The contract deck is shuffled and 5 cards are dealt face-up to form the contract board. The first Chair is chosen randomly.",
        rules_phases_title: "Game Phases",
        rules_phase_1: "Contract Draft - Starting with the Chair, players take turns drafting contracts",
        rules_phase_2: "Black Market - 60 seconds for free trading of contracts and chips",
        rules_phase_3: "Job Reveal - A new job card is revealed",
        rules_phase_4: "Crew Selection - The Chair selects crew members for the job",
        rules_phase_5: "Secret Claims - Crew members secretly write how much they want from the pot",
        rules_phase_6: "Betting - Non-crew players bet on success or failure",
        rules_phase_7: "Resolution - Claims are revealed and job succeeds or fails",
        rules_success_title: "Job Success",
        rules_success_text: "If total claims are equal to or less than the pot, the job succeeds! Each crew member receives their claimed amount. Investors get 2x their bet. Unclaimed money rolls over to the next job.",
        rules_failure_title: "Job Failure",
        rules_failure_text: "If total claims exceed the pot, the job fails! Crew receives nothing. Shorters get 2x their bet. The entire pot rolls over to the next job.",
        rules_contracts_title: "Contracts",
        rules_contracts_text: "Contracts have secret objectives. Complete them during gameplay to earn bonuses. Incomplete contracts at game end result in penalties. Contracts belong to 5 categories: Precision, Chaos, Trust, Greed, and Hustle.",
        rules_setbonus_title: "Set Bonuses",
        rules_set_1: "Specialist: 3 contracts in one category = +$4,000",
        rules_set_2: "Versatile: 1 contract in each category = +$5,000",
        rules_set_3: "Obsessed: 4 contracts in one category = +$7,000",
        rules_set_4: "Legend: 6 total contracts = +$6,000",
        rules_set_5: "Mastermind: 3 contracts in two categories = +$10,000",
        rules_chair_title: "The Chair",
        rules_chair_text: "The Chair rotates to the player with the lowest chips after each job. In case of a tie, it goes clockwise from the current Chair. The Chair drafts first and selects the crew.",

        // Trading
        done_trading: "Done - Next Player",
        discard: "Discard",
        trade: "Trade",
        to: "to",
        cancel: "Cancel",
        pending_trades: "Pending Offers",
        offers: "offers",
        wants: "Wants",
        accept: "Accept",
        decline: "Decline",
        select_trade_partner: "Select who to trade with:",
        add_chips: "Include chips:",
        request_chips: "Request chips:",
        trade_negotiate_hint: "Negotiate verbally, then set chip amounts",
        send_offer: "Send Offer",
        no_contracts_hand: "No contracts in hand",

        // Contract Fulfillment
        contracts_completed: "Contracts Completed!",
        no_contracts_completed: "No contracts completed this job.",
        contract_board: "Contract Board",
        select_contract: "Select a contract or pass",

        // Errors
        error_players: "Please enter 5-12 player names",
        error_chips: "Not enough chips!",
        error_max_bet: "Maximum bet is $6,000",

        // Contract Objectives
        contract_quick_score: "Claim ≥$3,000 on a successful job",
        contract_team_player: "Be on a successful crew",
        contract_bet_winner: "Profit from a bet",
        contract_small_fry: "Claim exactly $2,000 on a job",
        contract_troublemaker: "Be on a crew that fails",
        contract_benchwarmer: "Be excluded from a crew on a job with pot ≥$14,000",
        contract_momentum: "Be on a successful crew when the previous job also succeeded",
        contract_penny_pincher: "Have ≥$15,000 total chips when completing this contract",
        contract_nibble: "Claim ≤$2,000 on a successful job",
        contract_lucky_guess: "Invest on a job that succeeds",
        contract_dodged_bullet: "Be excluded from a crew that fails",
        contract_fair_share: "Claim within $1,000 of (Pot ÷ Crew Size) on a successful job",
        contract_helping_hand: "Be on a crew where total claims ≤80% of pot",
        contract_side_bet: "Profit ≥$2,000 from a single bet",
        contract_modesty: "Claim the smallest share on a successful crew (no ties)",
        contract_spoiler: "Be on a crew that fails when the previous job succeeded",
        contract_table_scraps: "Claim ≤$1,000 on a job with pot ≥$15,000 that succeeds",
        contract_against_the_grain: "Profit from a bet when at least one other player bet opposite",
        contract_second_fiddle: "Claim the second-smallest share on a successful crew of 4+",
        contract_cleanup_crew: "Be on a successful crew when the previous job failed",
        contract_big_claim: "Claim ≥$5,000 on a successful job",
        contract_firestarter: "A job fails with pot ≥$12,000",
        contract_sharpshooter: "Claim within $500 of (Pot ÷ Crew Size) on a successful job",
        contract_smart_money: "Profit from a bet on a job following a failed job",
        contract_crew_builder: "Be Chair for a successful job",
        contract_smooth_sailing: "Be on a successful crew when the previous job also succeeded and you were on that crew too",
        contract_nest_egg: "Have ≥$22,000 total chips when completing this contract",
        contract_calculated_risk: "Short a job and it fails",
        contract_surgical_strike: "Be on a crew that fails by ≤$3,000",
        contract_tight_crew: "Be on a crew that claims within $1,000 of the pot",
        contract_anchor: "Be on a successful crew where you also claimed ≥$3,000",
        contract_fat_cat: "Have more chips than every other player when completing this contract",
        contract_double_down: "Invest ≥$4,000 on a single job and win",
        contract_repeat_offender: "Be on a failed crew when the previous job also failed",
        contract_razors_edge: "Be on a crew where total claims equal exactly the pot",
        contract_kingmaker: "Be Chair for a successful job you're not on",
        contract_contrarian: "Profit from a bet when at least two others bet opposite and lost",
        contract_restraint: "Claim $0 on a job that succeeds",
        contract_controlled_burn: "A job fails by ≤$2,000",
        contract_lions_share: "Claim the largest share on a successful crew (no ties)",
        contract_trendsetter: "Claim an amount that at least one other crew member also claimed exactly, on a successful job",
        contract_bail_out: "Be on a successful crew on a job with rollover from a previous failure",
        contract_saboteur: "Be on a failed crew where you claimed more than (Pot ÷ Crew Size)",
        contract_steady_hand: "Be on two consecutive successful crews",
        contract_high_roller: "Win a bet of ≥$5,000",
        contract_kingpin: "Be chip leader by at least $4,000 when completing this contract",
        contract_demolition_expert: "A job fails that has rollover ≥$8,000 from previous failures",
        contract_masterstroke: "Claim the largest share on a crew that succeeds by ≤$2,000 margin",
        contract_market_maker: "Profit ≥$5,000 from betting on a single job",
        contract_untouchable: "Be on a successful crew on the Final Job",
        contract_scorched_earth: "A job with pot ≥$18,000 (including rollover) fails",
        contract_last_laugh: "Claim the second-highest cut on the crew on The Final Job",
        contract_ironclad: "Be on a successful crew where every crew member claimed ≥$2,000",
        contract_all_in: "Bet $6,000 on a single job and win",
        contract_greed_is_good: "Claim ≥$6,000 on a successful job",
        contract_mirror_match: "Claim an amount that exactly two other crew members also claimed",
        contract_puppet_master: "Be Chair for a job that succeeds by ≤$2,000 margin",
        contract_oracle: "Be the only player to bet a direction (all others bet opposite or pass) and win",
        contract_sole_survivor: "Be the only crew member to claim ≤(Pot ÷ Crew Size) on a failed job",
        contract_photo_finish: "Be on a successful crew where total claims are within $500 of the pot"
    },
    es: {
        // UI Elements
        subtitle: "Un Juego de Atracos, Codicia y Traición",
        rules_button: "Reglas",
        setup_title: "Configuración",
        setup_hint: "Ingresa los nombres (5-12 jugadores)",
        add_player: "+ Agregar Jugador",
        start_game: "Comenzar Juego",
        view_rules: "Ver Reglas",
        continue: "Continuar",
        new_game: "Nuevo Juego",
        game_over: "Fin del Juego",
        final_standings: "Resultados Finales",

        // Game phases
        phase_label: "Fase",
        phase_initial_draft: "Selección Inicial",
        phase_draft: "Selección de Contratos",
        phase_trading: "Mercado Negro",
        phase_job_reveal: "Revelar Trabajo",
        phase_crew_select: "Selección de Equipo",
        phase_claiming: "Escribir Reclamos",
        phase_betting: "Realizar Apuestas",
        phase_reveal: "Resolución",
        phase_complete: "Completar Contratos",

        // Contract board
        contract_board: "Tablero de Contratos",
        tier_easy: "Fácil",
        tier_medium: "Medio",
        tier_hard: "Difícil",

        // Dashboard
        current_player: "Jugador Actual",
        your_hand: "Tu Mano",
        rap_sheet: "Hoja de Antecedentes",
        chips: "Fichas",
        in_hand: "en mano",
        completed: "completados",

        // Job
        job_small: "Trabajo Pequeño",
        job_medium: "Trabajo Mediano",
        job_large: "Trabajo Grande",
        job_huge: "Trabajo Enorme",
        job_final: "Trabajo Final",
        pot: "Bote",
        crew_size: "Equipo",
        rollover: "Acumulado",
        final_job_badge: "TRABAJO FINAL",

        // Actions
        select_contract: "Selecciona un contrato o pasa",
        pass: "Pasar",
        draft_turn: " - turno de seleccionar",
        end_trading: "Terminar Intercambio e Iniciar Trabajo",
        trading_hint: "Los jugadores pueden intercambiar contratos y fichas libremente",
        start_crew_selection: "Jefe: Selecciona Equipo",
        select_crew: "Selecciona miembros del equipo",
        selected: "Seleccionados",
        confirm_crew: "Confirmar Equipo",
        enter_claim: "Ingresa tu reclamo",
        submit_claim: "Enviar Reclamo",
        all_claims_in: "Todos los Reclamos Enviados",
        start_betting: "Proceder a Apuestas",
        place_bet: "Realiza tu apuesta",
        max_bet: "Apuesta máx: $6,000",
        invest: "Invertir",
        short: "Apostar Contra",
        reveal_claims: "Revelar y Resolver",

        // Resolution
        success: "ÉXITO",
        failure: "FRACASO",
        total_claims: "Reclamos Totales",
        total_pot: "Bote Total",
        margin: "Margen",
        claims: "Reclamos",
        bets: "Apuestas",
        no_bets: "Sin apuestas",
        complete_contracts_hint: "Revisa tus contratos y completa los cumplidos esta ronda",
        next_job: "Próximo Trabajo",
        finish_game: "Terminar Juego",

        // Modal
        pass_device: "Pasar Dispositivo",
        pass_to: "Pasa el dispositivo a",
        ready_message: "Asegúrate de que nadie más pueda ver la pantalla",

        // Scoring
        chips_label: "Fichas",
        completed_label: "Completados",
        penalties_label: "Penalizaciones",
        winner: "Ganador",

        // Categories
        precision: "Precisión",
        chaos: "Caos",
        trust: "Confianza",
        greed: "Codicia",
        hustle: "Astucia",

        // Set bonuses
        specialist: "Especialista",
        versatile: "Versátil",
        obsessed: "Obsesionado",
        legend: "Leyenda",
        mastermind: "Cerebro",

        // Rules
        rules_title: "Cómo Jugar",
        rules_overview_title: "Resumen del Juego",
        rules_overview_text: "THE TAKE es un juego de atracos, codicia y traición para 5-12 jugadores. Eres un criminal independiente trabajando en golpes junto con otros, pero todos tienen su propia agenda a través de contratos secretos.",
        rules_objective_title: "Objetivo",
        rules_objective_text: "Gana la mayor cantidad de dinero al final del juego a través de atracos exitosos, completando contratos y apostando estratégicamente. El jugador con más dinero (menos penalizaciones por contratos incompletos) gana.",
        rules_setup_title: "Configuración",
        rules_setup_text: "Cada jugador comienza con $10,000. El mazo de contratos se baraja y 5 cartas se colocan boca arriba para formar el tablero de contratos. El primer Jefe se elige al azar.",
        rules_phases_title: "Fases del Juego",
        rules_phase_1: "Selección de Contratos - Comenzando con el Jefe, los jugadores toman turnos seleccionando contratos",
        rules_phase_2: "Mercado Negro - 60 segundos para intercambiar contratos y fichas libremente",
        rules_phase_3: "Revelar Trabajo - Se revela una nueva carta de trabajo",
        rules_phase_4: "Selección de Equipo - El Jefe selecciona miembros del equipo para el trabajo",
        rules_phase_5: "Reclamos Secretos - Los miembros del equipo escriben en secreto cuánto dinero quieren del bote",
        rules_phase_6: "Apuestas - Los jugadores que no están en el equipo apuestan por éxito o fracaso",
        rules_phase_7: "Resolución - Los reclamos se revelan y el trabajo tiene éxito o fracasa",
        rules_success_title: "Trabajo Exitoso",
        rules_success_text: "Si los reclamos totales son iguales o menores que el bote, ¡el trabajo tiene éxito! Cada miembro del equipo recibe la cantidad reclamada. Los inversores obtienen 2x su apuesta. El dinero no reclamado se acumula para el próximo trabajo.",
        rules_failure_title: "Trabajo Fracasado",
        rules_failure_text: "Si los reclamos totales exceden el bote, ¡el trabajo fracasa! El equipo no recibe nada. Los que apostaron contra obtienen 2x su apuesta. Todo el bote se acumula para el próximo trabajo.",
        rules_contracts_title: "Contratos",
        rules_contracts_text: "Los contratos tienen objetivos secretos. Complételos durante el juego para obtener bonificaciones. Los contratos incompletos al final del juego resultan en penalizaciones. Los contratos pertenecen a 5 categorías: Precisión, Caos, Confianza, Codicia y Astucia.",
        rules_setbonus_title: "Bonificaciones de Conjunto",
        rules_set_1: "Especialista: 3 contratos en una categoría = +$4,000",
        rules_set_2: "Versátil: 1 contrato en cada categoría = +$5,000",
        rules_set_3: "Obsesionado: 4 contratos en una categoría = +$7,000",
        rules_set_4: "Leyenda: 6 contratos totales = +$6,000",
        rules_set_5: "Cerebro: 3 contratos en dos categorías = +$10,000",
        rules_chair_title: "El Jefe",
        rules_chair_text: "El Jefe rota al jugador con menos fichas después de cada trabajo. En caso de empate, va en sentido horario desde el Jefe actual. El Jefe selecciona primero y elige el equipo.",

        // Trading
        done_trading: "Listo - Siguiente Jugador",
        discard: "Descartar",
        trade: "Intercambiar",
        to: "a",
        cancel: "Cancelar",
        pending_trades: "Ofertas Pendientes",
        offers: "ofrece",
        wants: "Quiere",
        accept: "Aceptar",
        decline: "Rechazar",
        select_trade_partner: "Selecciona con quién intercambiar:",
        add_chips: "Incluir fichas:",
        request_chips: "Pedir fichas:",
        trade_negotiate_hint: "Negocien verbalmente, luego configura las fichas",
        send_offer: "Enviar Oferta",
        no_contracts_hand: "Sin contratos en mano",

        // Contract Fulfillment
        contracts_completed: "¡Contratos Completados!",
        no_contracts_completed: "Ningún contrato completado en este trabajo.",
        contract_board: "Tablero de Contratos",
        select_contract: "Selecciona un contrato o pasa",

        // Errors
        error_players: "Por favor ingresa 5-12 nombres de jugadores",
        error_chips: "¡No tienes suficientes fichas!",
        error_max_bet: "La apuesta máxima es $6,000",

        // Contract Objectives
        contract_quick_score: "Reclama ≥$3,000 en un trabajo exitoso",
        contract_team_player: "Sé parte de un equipo exitoso",
        contract_bet_winner: "Gana con una apuesta",
        contract_small_fry: "Reclama exactamente $2,000 en un trabajo",
        contract_troublemaker: "Sé parte de un equipo que fracasa",
        contract_benchwarmer: "Quédate fuera de un equipo en un trabajo con bote ≥$14,000",
        contract_momentum: "Sé parte de un equipo exitoso cuando el trabajo anterior también tuvo éxito",
        contract_penny_pincher: "Ten ≥$15,000 fichas totales al completar este contrato",
        contract_nibble: "Reclama ≤$2,000 en un trabajo exitoso",
        contract_lucky_guess: "Invierte en un trabajo que tiene éxito",
        contract_dodged_bullet: "Quédate fuera de un equipo que fracasa",
        contract_fair_share: "Reclama dentro de $1,000 de (Bote ÷ Tamaño del Equipo) en un trabajo exitoso",
        contract_helping_hand: "Sé parte de un equipo donde los reclamos totales sean ≤80% del bote",
        contract_side_bet: "Gana ≥$2,000 de una sola apuesta",
        contract_modesty: "Reclama la parte más pequeña en un equipo exitoso (sin empates)",
        contract_spoiler: "Sé parte de un equipo que fracasa cuando el trabajo anterior tuvo éxito",
        contract_table_scraps: "Reclama ≤$1,000 en un trabajo con bote ≥$15,000 que tiene éxito",
        contract_against_the_grain: "Gana con una apuesta cuando al menos otro jugador apostó lo contrario",
        contract_second_fiddle: "Reclama la segunda parte más pequeña en un equipo exitoso de 4+",
        contract_cleanup_crew: "Sé parte de un equipo exitoso cuando el trabajo anterior fracasó",
        contract_big_claim: "Reclama ≥$5,000 en un trabajo exitoso",
        contract_firestarter: "Un trabajo fracasa con bote ≥$12,000",
        contract_sharpshooter: "Reclama dentro de $500 de (Bote ÷ Tamaño del Equipo) en un trabajo exitoso",
        contract_smart_money: "Gana con una apuesta en un trabajo después de uno que fracasó",
        contract_crew_builder: "Sé Jefe de un trabajo exitoso",
        contract_smooth_sailing: "Sé parte de un equipo exitoso cuando el trabajo anterior también tuvo éxito y estuviste en ese equipo también",
        contract_nest_egg: "Ten ≥$22,000 fichas totales al completar este contrato",
        contract_calculated_risk: "Apuesta contra un trabajo y fracasa",
        contract_surgical_strike: "Sé parte de un equipo que fracasa por ≤$3,000",
        contract_tight_crew: "Sé parte de un equipo que reclama dentro de $1,000 del bote",
        contract_anchor: "Sé parte de un equipo exitoso donde también reclamaste ≥$3,000",
        contract_fat_cat: "Ten más fichas que todos los demás jugadores al completar este contrato",
        contract_double_down: "Invierte ≥$4,000 en un solo trabajo y gana",
        contract_repeat_offender: "Sé parte de un equipo que fracasa cuando el trabajo anterior también fracasó",
        contract_razors_edge: "Sé parte de un equipo donde los reclamos totales igualan exactamente el bote",
        contract_kingmaker: "Sé Jefe de un trabajo exitoso en el que no participas",
        contract_contrarian: "Gana con una apuesta cuando al menos otros dos apostaron lo contrario y perdieron",
        contract_restraint: "Reclama $0 en un trabajo que tiene éxito",
        contract_controlled_burn: "Un trabajo fracasa por ≤$2,000",
        contract_lions_share: "Reclama la parte más grande en un equipo exitoso (sin empates)",
        contract_trendsetter: "Reclama una cantidad que al menos otro miembro del equipo también reclamó exactamente, en un trabajo exitoso",
        contract_bail_out: "Sé parte de un equipo exitoso en un trabajo con acumulado de un fracaso anterior",
        contract_saboteur: "Sé parte de un equipo que fracasa donde reclamaste más que (Bote ÷ Tamaño del Equipo)",
        contract_steady_hand: "Sé parte de dos equipos exitosos consecutivos",
        contract_high_roller: "Gana una apuesta de ≥$5,000",
        contract_kingpin: "Sé líder en fichas por al menos $4,000 al completar este contrato",
        contract_demolition_expert: "Un trabajo fracasa que tiene acumulado ≥$8,000 de fracasos anteriores",
        contract_masterstroke: "Reclama la parte más grande en un equipo que tiene éxito por ≤$2,000 de margen",
        contract_market_maker: "Gana ≥$5,000 apostando en un solo trabajo",
        contract_untouchable: "Sé parte de un equipo exitoso en el Trabajo Final",
        contract_scorched_earth: "Un trabajo con bote ≥$18,000 (incluyendo acumulado) fracasa",
        contract_last_laugh: "Reclama la segunda parte más alta del equipo en El Trabajo Final",
        contract_ironclad: "Sé parte de un equipo exitoso donde cada miembro reclamó ≥$2,000",
        contract_all_in: "Apuesta $6,000 en un solo trabajo y gana",
        contract_greed_is_good: "Reclama ≥$6,000 en un trabajo exitoso",
        contract_mirror_match: "Reclama una cantidad que exactamente otros dos miembros del equipo también reclamaron",
        contract_puppet_master: "Sé Jefe de un trabajo que tiene éxito por ≤$2,000 de margen",
        contract_oracle: "Sé el único jugador en apostar en una dirección (todos los demás apuestan lo contrario o pasan) y gana",
        contract_sole_survivor: "Sé el único miembro del equipo en reclamar ≤(Bote ÷ Tamaño del Equipo) en un trabajo que fracasa",
        contract_photo_finish: "Sé parte de un equipo exitoso donde los reclamos totales están dentro de $500 del bote"
    }
};

// ========================================
// DATA: Contracts (matching rulebook)
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
        { name: "Against the Grain", category: "hustle", objective: "Profit from a bet when at least one other player bet opposite", bonus: 2500, penalty: 1500, icon: "🎲" },
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
        { name: "Tight Crew", category: "precision", objective: "Be on a crew that claims within $1,000 of the pot", bonus: 4500, penalty: 3000, icon: "🎯" },
        { name: "Anchor", category: "trust", objective: "Be on a successful crew where you also claimed ≥$3,000", bonus: 4000, penalty: 3000, icon: "🤝" },
        { name: "Fat Cat", category: "greed", objective: "Have more chips than every other player when completing this contract", bonus: 3500, penalty: 3000, icon: "💰" },
        { name: "Double Down", category: "hustle", objective: "Invest ≥$4,000 on a single job and win", bonus: 4000, penalty: 3000, icon: "🎲" },
        { name: "Repeat Offender", category: "chaos", objective: "Be on a failed crew when the previous job also failed", bonus: 4000, penalty: 3000, icon: "💣" },
        { name: "Razor's Edge", category: "precision", objective: "Be on a crew where total claims equal exactly the pot", bonus: 4500, penalty: 3000, icon: "🎯" },
        { name: "Kingmaker", category: "trust", objective: "Be Chair for a successful job you're not on", bonus: 4000, penalty: 3000, icon: "🤝" },
        { name: "Contrarian", category: "hustle", objective: "Profit from a bet when at least two others bet opposite and lost", bonus: 4000, penalty: 3000, icon: "🎲" },
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
        { name: "Last Laugh", category: "precision", objective: "Claim the second-highest cut on the crew on The Final Job", bonus: 7000, penalty: 5000, icon: "🎯" },
        { name: "Ironclad", category: "trust", objective: "Be on a successful crew where every crew member claimed ≥$2,000", bonus: 6500, penalty: 5000, icon: "🤝" },
        { name: "All In", category: "hustle", objective: "Bet $6,000 on a single job and win", bonus: 5000, penalty: 5000, icon: "🎲" },
        { name: "Greed is Good", category: "greed", objective: "Claim ≥$6,000 on a successful job", bonus: 5000, penalty: 5000, icon: "💰" },
        { name: "Mirror Match", category: "precision", objective: "Claim an amount that exactly two other crew members also claimed", bonus: 5500, penalty: 5000, icon: "🎯" },
        { name: "Puppet Master", category: "trust", objective: "Be Chair for a job that succeeds by ≤$2,000 margin", bonus: 6000, penalty: 5000, icon: "🤝" },
        { name: "Oracle", category: "hustle", objective: "Be the only player to bet a direction (all others bet opposite or pass) and win", bonus: 6000, penalty: 5000, icon: "🎲" },
        { name: "Sole Survivor", category: "chaos", objective: "Be the only crew member to claim ≤(Pot ÷ Crew Size) on a failed job", bonus: 5500, penalty: 5000, icon: "💣" },
        { name: "Photo Finish", category: "trust", objective: "Be on a successful crew where total claims are within $500 of the pot", bonus: 7000, penalty: 5000, icon: "🤝" }
    ]
};

// ========================================
// DATA: Jobs (matching rulebook - 13 jobs)
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
        this.phase = 'setup';
        this.currentPlayerIndex = 0;
        this.draftRound = 0;
        this.crew = [];
        this.claims = {};
        this.bets = {};
    }

    initializeDecks() {
        this.contractDecks.easy = this.shuffle([...CONTRACTS.easy]);
        this.contractDecks.medium = this.shuffle([...CONTRACTS.medium]);
        this.contractDecks.hard = this.shuffle([...CONTRACTS.hard]);

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
            // Capture rollover at job start for contract evaluation
            this.currentJob.startingRollover = this.rollover;
            return this.currentJob;
        }
        return null;
    }

    getChair() {
        return this.players[this.chairIndex];
    }

    rotateChair() {
        let minChips = Math.min(...this.players.map(p => p.chips));
        let candidates = this.players
            .map((p, i) => ({ player: p, index: i }))
            .filter(({ player }) => player.chips === minChips);

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

        const counts = {
            precision: rapSheet.precision.length,
            chaos: rapSheet.chaos.length,
            trust: rapSheet.trust.length,
            greed: rapSheet.greed.length,
            hustle: rapSheet.hustle.length
        };

        const total = Object.values(counts).reduce((a, b) => a + b, 0);

        if (!player.setBonuses.includes('Specialist')) {
            for (const [cat, count] of Object.entries(counts)) {
                if (count >= 3) {
                    bonuses.push({ name: 'Specialist', bonus: 4000 });
                    break;
                }
            }
        }

        if (!player.setBonuses.includes('Obsessed')) {
            for (const [cat, count] of Object.entries(counts)) {
                if (count >= 4) {
                    bonuses.push({ name: 'Obsessed', bonus: 7000 });
                    break;
                }
            }
        }

        if (!player.setBonuses.includes('Versatile')) {
            if (Object.values(counts).every(c => c >= 1)) {
                bonuses.push({ name: 'Versatile', bonus: 5000 });
            }
        }

        if (!player.setBonuses.includes('Legend') && total >= 6) {
            bonuses.push({ name: 'Legend', bonus: 6000 });
        }

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
        this.language = localStorage.getItem('thetake-language') || 'en';
        this.loadState();
        this.updateLanguageUI();
    }

    // ========================================
    // Language Management
    // ========================================

    t(key) {
        return TRANSLATIONS[this.language][key] || key;
    }

    setLanguage(lang) {
        this.language = lang;
        localStorage.setItem('thetake-language', lang);
        this.updateLanguageUI();
        this.render();
    }

    updateLanguageUI() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.dataset.lang === this.language) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            const translation = this.t(key);
            if (translation && translation !== key) {
                el.textContent = translation;
            }
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
    // State Management
    // ========================================

    saveState() {
        const saveData = {
            state: this.state,
            language: this.language
        };
        localStorage.setItem('thetake-save', JSON.stringify(saveData));
    }

    loadState() {
        const saved = localStorage.getItem('thetake-save');
        if (saved) {
            try {
                const data = JSON.parse(saved);
                this.state = Object.assign(new GameState(), data.state);
                if (data.language) {
                    this.language = data.language;
                }
            } catch (e) {
                console.error('Failed to load state:', e);
            }
        }
    }

    reset() {
        localStorage.removeItem('thetake-save');
        window.location.reload();
    }

    // ========================================
    // Setup
    // ========================================

    addPlayerInput() {
        const container = document.getElementById('player-inputs');
        const count = container.children.length + 1;
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `${this.language === 'es' ? 'Jugador' : 'Player'} ${count}`;
        input.required = true;
        input.autocomplete = 'off';
        input.enterKeyHint = 'next';
        container.appendChild(input);
        input.focus();
    }

    startGame() {
        const inputs = document.querySelectorAll('#player-inputs input');
        const names = Array.from(inputs).map(i => i.value.trim()).filter(n => n);

        if (names.length < 5 || names.length > 12) {
            alert(this.t('error_players'));
            return;
        }

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

        this.state.initializeDecks();
        this.state.refillBoard();

        this.state.chairIndex = Math.floor(Math.random() * this.state.players.length);
        this.state.currentPlayerIndex = this.state.chairIndex;
        this.state.phase = 'initial-draft';

        this.saveState();
        this.showScreen('game-screen');

        // Show pass device modal for first drafter (the Chair)
        const firstPlayer = this.state.players[this.state.chairIndex];
        this.showModal(
            this.t('pass_device'),
            `${this.t('pass_to')} ${firstPlayer.name}. ${this.t('ready_message')}`,
            () => this.render()
        );
    }

    // ========================================
    // UI Management
    // ========================================

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
        window.scrollTo(0, 0);
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

    formatMoney(amount) {
        return '$' + amount.toLocaleString();
    }

    // ========================================
    // Rendering
    // ========================================

    render() {
        if (this.state.phase === 'setup') {
            return;
        }

        // Hide player turn modal by default (phases that need it will show it)
        const playerTurnModal = document.getElementById('player-turn-modal');
        const phasesWithModal = ['initial-draft', 'draft', 'trading', 'claiming', 'betting'];
        if (playerTurnModal && !phasesWithModal.includes(this.state.phase)) {
            playerTurnModal.classList.remove('active');
        }

        // Show/hide contract board section (only visible during phases that don't use modal)
        const contractBoardSection = document.getElementById('contract-board-section');
        const dashboardSection = document.getElementById('player-dashboard');

        // These sections should be hidden when using the player turn modal
        // and during job phases where they're not relevant
        const hideMainSections = phasesWithModal.includes(this.state.phase) ||
            ['job-reveal', 'crew-select', 'reveal', 'complete-contracts'].includes(this.state.phase);

        if (contractBoardSection) {
            contractBoardSection.style.display = hideMainSections ? 'none' : 'block';
        }
        if (dashboardSection) {
            dashboardSection.style.display = hideMainSections ? 'none' : 'block';
        }

        this.renderPlayerStatus();
        this.renderPhase();
        this.updateLanguageUI();
        this.saveState();
    }

    renderPlayerStatus() {
        const container = document.getElementById('player-status');
        container.innerHTML = this.state.players.map((p, i) => `
            <div class="player-card ${i === this.state.chairIndex ? 'chair' : ''} ${i === this.state.currentPlayerIndex ? 'active' : ''}">
                <div class="name">${p.name}${i === this.state.chairIndex ? ' 👑' : ''}</div>
                <div class="chips">${this.formatMoney(p.chips)}</div>
                <div class="contracts">${p.hand.length} ${this.t('in_hand')} • ${Object.values(p.rapSheet).flat().length} ${this.t('completed')}</div>
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

    getContractObjective(contract) {
        // Convert contract name to translation key (e.g., "Quick Score" -> "contract_quick_score")
        const key = 'contract_' + contract.name.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/_+$/, '');
        const translated = this.t(key);
        // If translation exists and differs from key, use it; otherwise fallback to original
        return (translated && translated !== key) ? translated : contract.objective;
    }

    renderContractCard(contract, tier, index, options = {}) {
        const disabled = options.disabled ? 'disabled' : '';
        const selected = options.selected ? 'selected' : '';
        const onClick = options.onClick || `game.selectContract('${tier}', ${index})`;
        const objective = this.getContractObjective(contract);

        return `
            <div class="contract-card ${disabled} ${selected}"
                 data-category="${contract.category}"
                 onclick="${disabled ? '' : onClick}">
                <div class="contract-header">
                    <div class="contract-name">${contract.name}</div>
                    <div class="contract-category">${contract.icon}</div>
                </div>
                <div class="contract-objective">${objective}</div>
                <div class="contract-footer">
                    <div class="contract-bonus">+${this.formatMoney(contract.bonus)}</div>
                    <div class="contract-penalty">-${this.formatMoney(contract.penalty)}</div>
                </div>
            </div>
        `;
    }

    renderDashboard() {
        const currentPlayer = this.state.getCurrentPlayer();
        if (!currentPlayer) return;

        document.getElementById('current-player-name').textContent = currentPlayer.name;
        document.getElementById('player-chips').textContent = this.formatMoney(currentPlayer.chips);

        // Render hand
        const handContainer = document.getElementById('player-hand');
        if (currentPlayer.hand.length === 0) {
            handContainer.innerHTML = `<p class="text-muted" style="font-size: 0.875rem; text-align: center; padding: 1rem;">No contracts in hand</p>`;
        } else {
            handContainer.innerHTML = currentPlayer.hand.map((contract, i) =>
                this.renderContractCard(contract, contract.tier, i, { disabled: true, onClick: '' })
            ).join('');
        }

        // Render rap sheet
        this.renderRapSheet(currentPlayer);
    }

    renderRapSheet(player) {
        const categories = ['precision', 'chaos', 'trust', 'greed', 'hustle'];
        const icons = { precision: '🎯', chaos: '💣', trust: '🤝', greed: '💰', hustle: '🎲' };

        const rapSheetContainer = document.getElementById('rap-sheet');
        rapSheetContainer.innerHTML = categories.map(cat => `
            <div class="category-column" data-category="${cat}">
                <div class="category-header">
                    <span class="category-icon">${icons[cat]}</span>
                    ${this.t(cat)}
                </div>
                ${player.rapSheet[cat].map(c => `
                    <div class="completed-contract">${c.name}</div>
                `).join('')}
            </div>
        `).join('');

        // Render set bonuses
        const setBonusContainer = document.getElementById('set-bonuses');
        if (player.setBonuses.length > 0) {
            setBonusContainer.innerHTML = player.setBonuses.map(bonus => `
                <div class="set-bonus">
                    <span class="name">${this.t(bonus.toLowerCase())}</span>
                    <span class="value">+${this.formatMoney(bonus === 'Specialist' ? 4000 : bonus === 'Versatile' ? 5000 : bonus === 'Obsessed' ? 7000 : bonus === 'Legend' ? 6000 : 10000)}</span>
                </div>
            `).join('');
        } else {
            setBonusContainer.innerHTML = '';
        }
    }

    renderPhase() {
        const phaseIndicator = document.getElementById('phase-indicator');
        const potDisplay = document.getElementById('pot-display');
        const actionArea = document.getElementById('action-area');
        const jobSection = document.getElementById('job-section');

        // Update pot display
        if (this.state.currentJob) {
            const totalPot = this.state.currentJob.pot + this.state.rollover;
            potDisplay.textContent = `${this.t('pot')}: ${this.formatMoney(totalPot)}`;
        } else {
            potDisplay.textContent = '';
        }

        // Hide job section by default
        jobSection.innerHTML = '';

        // Phase-specific rendering
        switch (this.state.phase) {
            case 'initial-draft':
                phaseIndicator.textContent = this.t('phase_initial_draft');
                this.renderDraftPhase(true);
                break;
            case 'draft':
                phaseIndicator.textContent = this.t('phase_draft');
                this.renderDraftPhase(false);
                break;
            case 'trading':
                phaseIndicator.textContent = this.t('phase_trading');
                this.renderTradingPhase();
                break;
            case 'job-reveal':
                phaseIndicator.textContent = this.t('phase_job_reveal');
                this.renderJobReveal();
                break;
            case 'crew-select':
                phaseIndicator.textContent = this.t('phase_crew_select');
                this.renderCrewSelection();
                break;
            case 'claiming':
                phaseIndicator.textContent = this.t('phase_claiming');
                this.renderClaimingPhase();
                break;
            case 'betting':
                phaseIndicator.textContent = this.t('phase_betting');
                this.renderBettingPhase();
                break;
            case 'reveal':
                phaseIndicator.textContent = this.t('phase_reveal');
                this.renderRevealPhase();
                break;
            case 'complete-contracts':
                phaseIndicator.textContent = this.t('phase_complete');
                this.renderCompleteContractsPhase();
                break;
        }
    }

    renderDraftPhase(isInitial) {
        const actionArea = document.getElementById('action-area');
        const playerTurnModal = document.getElementById('player-turn-modal');
        const currentPlayer = this.state.getCurrentPlayer();

        // Show the player turn modal
        playerTurnModal.classList.add('active');

        // Populate the modal header
        document.getElementById('player-turn-label').textContent = isInitial ? this.t('phase_initial_draft') : this.t('phase_draft');
        document.getElementById('player-turn-name').textContent = currentPlayer.name;
        document.getElementById('player-turn-chips').textContent = this.formatMoney(currentPlayer.chips);

        // Render the contract board in the job section (repurposed for draft)
        const boardHtml = ['easy', 'medium', 'hard'].map(tier => {
            const contracts = this.state.contractBoard[tier];
            if (contracts.length === 0) return '';
            return `
                <div class="tier-row">
                    <span class="tier-label ${tier}">${this.t('tier_' + tier)}</span>
                    <div class="contract-row">
                        ${contracts.map((contract, index) =>
                            this.renderContractCard(contract, tier, index)
                        ).join('')}
                    </div>
                </div>
            `;
        }).join('');

        document.getElementById('player-turn-job').innerHTML = `
            <div class="player-turn-job-title">${this.t('contract_board')}</div>
            <div class="draft-board">${boardHtml}</div>
        `;

        // Render pass button in claim section
        document.getElementById('player-turn-claim').innerHTML = `
            <label>${this.t('select_contract')}</label>
            <button class="btn btn-secondary" onclick="game.passDraft()" style="max-width: 280px; margin: 0 auto;">${this.t('pass')}</button>
        `;

        // Render the player's current hand
        const handHtml = currentPlayer.hand.length > 0
            ? `<h3>${this.t('your_hand')}</h3>
               <div class="contract-hand">
                   ${currentPlayer.hand.map((contract, i) =>
                       this.renderContractCard(contract, contract.tier, i, { disabled: true, onClick: '' })
                   ).join('')}
               </div>`
            : `<h3>${this.t('your_hand')}</h3>
               <div class="no-contracts">No contracts in hand</div>`;

        document.getElementById('player-turn-hand').innerHTML = handHtml;

        // Clear the main action area
        actionArea.innerHTML = '';
    }

    selectContract(tier, index) {
        const currentPlayer = this.state.getCurrentPlayer();
        const contract = this.state.contractBoard[tier][index];

        currentPlayer.hand.push({ ...contract, tier });
        this.state.contractBoard[tier].splice(index, 1);

        this.advanceDraft();
    }

    passDraft() {
        this.advanceDraft();
    }

    advanceDraft() {
        // Hide the player turn modal before showing pass device modal
        const playerTurnModal = document.getElementById('player-turn-modal');
        playerTurnModal.classList.remove('active');

        this.state.nextPlayer();

        if (this.state.currentPlayerIndex === this.state.chairIndex) {
            if (this.state.phase === 'initial-draft') {
                this.startBetweenJobs();
            } else {
                this.state.phase = 'trading';
                this.startTrading();
            }
        } else {
            // Show pass device modal for next drafter
            const nextPlayer = this.state.getCurrentPlayer();
            this.showModal(
                this.t('pass_device'),
                `${this.t('pass_to')} ${nextPlayer.name}. ${this.t('ready_message')}`,
                () => this.render()
            );
        }
    }

    startBetweenJobs() {
        this.state.rotateChair();
        this.state.currentPlayerIndex = this.state.chairIndex;
        this.state.phase = 'draft';
        this.state.refillBoard();

        // Show pass device modal for the new Chair
        const chair = this.state.getChair();
        this.showModal(
            this.t('pass_device'),
            `${this.t('pass_to')} ${chair.name}. ${this.t('ready_message')}`,
            () => this.render()
        );
    }

    startTrading() {
        // Initialize trading state
        if (!this.state.pendingTrades) {
            this.state.pendingTrades = [];
        }
        this.state.currentPlayerIndex = 0;

        // Show pass device modal for first player
        const firstPlayer = this.state.players[0];
        this.showModal(
            this.t('pass_device'),
            `${this.t('pass_to')} ${firstPlayer.name}. ${this.t('ready_message')}`,
            () => this.render()
        );
    }

    renderTradingPhase() {
        const actionArea = document.getElementById('action-area');
        const playerTurnModal = document.getElementById('player-turn-modal');
        const currentPlayer = this.state.getCurrentPlayer();

        // Show the player turn modal
        playerTurnModal.classList.add('active');

        // Populate the modal header
        document.getElementById('player-turn-label').textContent = this.t('phase_trading');
        document.getElementById('player-turn-name').textContent = currentPlayer.name;
        document.getElementById('player-turn-chips').textContent = this.formatMoney(currentPlayer.chips);

        // Check for pending trades for this player
        const pendingForMe = (this.state.pendingTrades || []).filter(t => t.toPlayer === this.state.currentPlayerIndex);

        // Render pending trades section
        let pendingHtml = '';
        if (pendingForMe.length > 0) {
            pendingHtml = `
                <div class="pending-trades">
                    <h4>${this.t('pending_trades')}</h4>
                    ${pendingForMe.map((trade, i) => {
                        const fromPlayer = this.state.players[trade.fromPlayer];
                        const chipsText = trade.chipsOffered > 0 ? ` + ${this.formatMoney(trade.chipsOffered)}` : '';
                        const wantText = trade.chipsWanted > 0 ? `<div class="trade-wants">${this.t('wants')}: ${this.formatMoney(trade.chipsWanted)}</div>` : '';
                        return `
                            <div class="pending-trade">
                                <div class="trade-info">
                                    <span>${fromPlayer.name} ${this.t('offers')}: ${trade.contract.name}${chipsText}</span>
                                    ${wantText}
                                </div>
                                <div class="trade-buttons">
                                    <button class="btn btn-success" onclick="game.acceptTrade(${i})" style="padding: 8px 16px; min-height: auto;">${this.t('accept')}</button>
                                    <button class="btn btn-danger" onclick="game.declineTrade(${i})" style="padding: 8px 16px; min-height: auto;">${this.t('decline')}</button>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
        }

        document.getElementById('player-turn-job').innerHTML = `
            <div class="player-turn-job-title">${this.t('phase_trading')}</div>
            <p style="font-size: 0.875rem; color: var(--navy-blue); margin-bottom: 1rem;">${this.t('trading_hint')}</p>
            ${pendingHtml}
        `;

        // Render trading actions
        document.getElementById('player-turn-claim').innerHTML = `
            <div class="trading-actions">
                <button class="btn btn-secondary" onclick="game.nextTrader()" style="margin-bottom: 0.5rem;">${this.t('done_trading')}</button>
                <button class="btn btn-primary" onclick="game.finishTrading()">${this.t('end_trading')}</button>
            </div>
        `;

        // Render the player's hand with discard and trade options
        const handHtml = currentPlayer.hand.length > 0
            ? `<h3>${this.t('your_hand')}</h3>
               <div class="contract-hand">
                   ${currentPlayer.hand.map((contract, i) => `
                       <div class="tradeable-contract">
                           ${this.renderContractCard(contract, contract.tier, i, { disabled: true, onClick: '' })}
                           <div class="contract-actions">
                               <button class="btn btn-danger" onclick="game.discardContract(${i})" style="padding: 8px 12px; min-height: auto; font-size: 0.75rem;">
                                   ${this.t('discard')} (-$1,000)
                               </button>
                               <button class="btn btn-secondary" onclick="game.startTrade(${i})" style="padding: 8px 12px; min-height: auto; font-size: 0.75rem;">
                                   ${this.t('trade')}
                               </button>
                           </div>
                       </div>
                   `).join('')}
               </div>`
            : `<h3>${this.t('your_hand')}</h3>
               <div class="no-contracts">${this.t('no_contracts_hand')}</div>`;

        document.getElementById('player-turn-hand').innerHTML = handHtml;

        // Clear the main action area
        actionArea.innerHTML = '';
    }

    discardContract(contractIndex) {
        const currentPlayer = this.state.getCurrentPlayer();

        if (currentPlayer.chips < 1000) {
            alert(this.t('error_chips'));
            return;
        }

        currentPlayer.chips -= 1000;
        currentPlayer.hand.splice(contractIndex, 1);
        this.render();
    }

    startTrade(contractIndex) {
        const currentPlayer = this.state.getCurrentPlayer();
        const contract = currentPlayer.hand[contractIndex];

        // Store the contract being traded
        this.state.tradingContract = { contract, contractIndex };

        // Show trade configuration UI
        const otherPlayers = this.state.players
            .map((p, i) => ({ player: p, index: i }))
            .filter(({ index }) => index !== this.state.currentPlayerIndex);

        const playerOptions = otherPlayers.map(({ player, index }) =>
            `<button class="btn btn-outline player-select-btn" onclick="game.selectTradePartner(${index})" style="margin: 4px;">${player.name}</button>`
        ).join('');

        document.getElementById('player-turn-claim').innerHTML = `
            <label>${this.t('trade')} "${contract.name}"</label>
            <p style="font-size: 0.875rem; color: var(--navy-blue); margin-bottom: 1rem;">${this.t('select_trade_partner')}</p>
            <div class="player-selection">
                ${playerOptions}
            </div>
            <button class="btn btn-secondary" onclick="game.cancelTrade()" style="max-width: 200px; margin: 1rem auto 0;">${this.t('cancel')}</button>
        `;
    }

    selectTradePartner(toPlayerIndex) {
        const contract = this.state.tradingContract.contract;
        const currentPlayer = this.state.getCurrentPlayer();
        const toPlayer = this.state.players[toPlayerIndex];

        // Show chip negotiation UI
        document.getElementById('player-turn-claim').innerHTML = `
            <label>${this.t('trade')} "${contract.name}" ${this.t('to')} ${toPlayer.name}</label>

            <div class="trade-config">
                <div class="trade-row">
                    <span>${this.t('add_chips')}</span>
                    <input type="number" id="chips-offered" min="0" max="${currentPlayer.chips}" step="1000" value="0" inputmode="numeric" style="width: 120px; text-align: center;">
                </div>
                <div class="trade-row">
                    <span>${this.t('request_chips')}</span>
                    <input type="number" id="chips-wanted" min="0" step="1000" value="0" inputmode="numeric" style="width: 120px; text-align: center;">
                </div>
            </div>

            <p style="font-size: 0.75rem; color: var(--navy-blue); margin: 1rem 0;">${this.t('trade_negotiate_hint')}</p>

            <div class="trading-actions">
                <button class="btn btn-primary" onclick="game.confirmTrade(${toPlayerIndex})" style="margin-bottom: 0.5rem;">${this.t('send_offer')}</button>
                <button class="btn btn-secondary" onclick="game.cancelTrade()">${this.t('cancel')}</button>
            </div>
        `;
    }

    confirmTrade(toPlayerIndex) {
        const currentPlayer = this.state.getCurrentPlayer();
        const { contract, contractIndex } = this.state.tradingContract;
        const chipsOffered = parseInt(document.getElementById('chips-offered').value) || 0;
        const chipsWanted = parseInt(document.getElementById('chips-wanted').value) || 0;

        // Validate chips offered
        if (chipsOffered > currentPlayer.chips) {
            alert(this.t('error_chips'));
            return;
        }

        // Remove contract from hand
        currentPlayer.hand.splice(contractIndex, 1);

        // Deduct chips offered (held in escrow until accepted)
        if (chipsOffered > 0) {
            currentPlayer.chips -= chipsOffered;
        }

        // Create pending trade
        if (!this.state.pendingTrades) {
            this.state.pendingTrades = [];
        }

        this.state.pendingTrades.push({
            fromPlayer: this.state.currentPlayerIndex,
            toPlayer: toPlayerIndex,
            contract: contract,
            chipsOffered: chipsOffered,
            chipsWanted: chipsWanted
        });

        // Clear trading state
        this.state.tradingContract = null;
        this.render();
    }

    cancelTrade() {
        this.state.tradingContract = null;
        this.render();
    }

    acceptTrade(tradeIndex) {
        const pendingForMe = this.state.pendingTrades.filter(t => t.toPlayer === this.state.currentPlayerIndex);
        const trade = pendingForMe[tradeIndex];
        const currentPlayer = this.state.getCurrentPlayer();

        // Check if we can pay the requested chips
        if (trade.chipsWanted > 0 && currentPlayer.chips < trade.chipsWanted) {
            alert(this.t('error_chips'));
            return;
        }

        // Execute the trade
        // Receiver gets contract + chips offered
        currentPlayer.hand.push(trade.contract);
        currentPlayer.chips += trade.chipsOffered;

        // Receiver pays chips wanted
        if (trade.chipsWanted > 0) {
            currentPlayer.chips -= trade.chipsWanted;
            // Sender receives the wanted chips
            this.state.players[trade.fromPlayer].chips += trade.chipsWanted;
        }

        // Remove from pending trades
        const globalIndex = this.state.pendingTrades.indexOf(trade);
        this.state.pendingTrades.splice(globalIndex, 1);

        this.render();
    }

    declineTrade(tradeIndex) {
        const pendingForMe = this.state.pendingTrades.filter(t => t.toPlayer === this.state.currentPlayerIndex);
        const trade = pendingForMe[tradeIndex];

        // Return the contract and chips to the sender
        this.state.players[trade.fromPlayer].hand.push(trade.contract);
        if (trade.chipsOffered > 0) {
            this.state.players[trade.fromPlayer].chips += trade.chipsOffered;
        }

        // Remove from pending trades
        const globalIndex = this.state.pendingTrades.indexOf(trade);
        this.state.pendingTrades.splice(globalIndex, 1);

        this.render();
    }

    nextTrader() {
        const playerTurnModal = document.getElementById('player-turn-modal');
        playerTurnModal.classList.remove('active');

        this.state.currentPlayerIndex = (this.state.currentPlayerIndex + 1) % this.state.players.length;

        const nextPlayer = this.state.getCurrentPlayer();
        this.showModal(
            this.t('pass_device'),
            `${this.t('pass_to')} ${nextPlayer.name}. ${this.t('ready_message')}`,
            () => this.render()
        );
    }

    finishTrading() {
        const playerTurnModal = document.getElementById('player-turn-modal');
        playerTurnModal.classList.remove('active');

        // Clear any pending trades (unclaimed offers are lost)
        this.state.pendingTrades = [];

        this.endTrading();
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

        const jobTypeKey = `job_${job.type.toLowerCase().replace(' ', '_')}`;

        jobSection.innerHTML = `
            <div class="job-card">
                <div class="job-title">${this.t(jobTypeKey)}</div>
                <div class="job-details">
                    <div class="job-pot">${this.t('pot')}: ${this.formatMoney(totalPot)}</div>
                    <div class="job-crew">${this.t('crew_size')}: ${job.crewSize}</div>
                </div>
                ${this.state.rollover > 0 ? `<div class="job-rollover">+${this.formatMoney(this.state.rollover)} ${this.t('rollover')}</div>` : ''}
                ${job.isFinal ? `<div class="final-badge">${this.t('final_job_badge')}</div>` : ''}
            </div>
        `;

        const actionArea = document.getElementById('action-area');
        actionArea.innerHTML = `
            <div class="action-content">
                <div class="action-buttons">
                    <button class="btn btn-primary" onclick="game.startCrewSelection()">${this.t('start_crew_selection')}</button>
                </div>
            </div>
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
        const totalPot = job.pot + this.state.rollover;
        const jobTypeKey = `job_${job.type.toLowerCase().replace(' ', '_')}`;

        const playerButtons = this.state.players.map((p, i) => {
            const isSelected = this.state.crew.includes(i);
            return `
                <button class="crew-btn ${isSelected ? 'selected' : ''}" onclick="game.toggleCrew(${i})">
                    ${p.name}
                </button>
            `;
        }).join('');

        jobSection.innerHTML = `
            <div class="job-card">
                <div class="job-title">${this.t(jobTypeKey)}</div>
                <div class="job-details">
                    <div class="job-pot">${this.t('pot')}: ${this.formatMoney(totalPot)}</div>
                    <div class="job-crew">${this.t('crew_size')}: ${job.crewSize}</div>
                </div>
                ${job.isFinal ? `<div class="final-badge">${this.t('final_job_badge')}</div>` : ''}
            </div>
            <div class="crew-selection">
                <h3>${chair.name}: ${this.t('select_crew')}</h3>
                <p class="crew-count">${this.t('selected')}: ${this.state.crew.length} / ${job.crewSize}</p>
                <div class="crew-buttons">
                    ${playerButtons}
                </div>
            </div>
        `;

        const actionArea = document.getElementById('action-area');
        actionArea.innerHTML = `
            <div class="action-content">
                <div class="action-buttons">
                    <button class="btn btn-primary" ${this.state.crew.length !== job.crewSize ? 'disabled' : ''} onclick="game.confirmCrew()">
                        ${this.t('confirm_crew')}
                    </button>
                </div>
            </div>
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

        // Show pass device modal for first crew member
        const firstCrewMember = this.state.players[this.state.crew[0]];
        this.showModal(
            this.t('pass_device'),
            `${this.t('pass_to')} ${firstCrewMember.name}. ${this.t('ready_message')}`,
            () => this.render()
        );
    }

    renderClaimingPhase() {
        const totalPot = this.state.currentJob.pot + this.state.rollover;
        const allClaimed = this.state.crew.every(i => this.state.claims[i] !== undefined);
        const actionArea = document.getElementById('action-area');
        const playerTurnModal = document.getElementById('player-turn-modal');
        const job = this.state.currentJob;
        const jobTypeKey = `job_${job.type.toLowerCase().replace(' ', '_')}`;

        if (allClaimed) {
            // Hide the player turn modal
            playerTurnModal.classList.remove('active');

            actionArea.innerHTML = `
                <div class="action-content">
                    <p class="action-text">${this.t('all_claims_in')}</p>
                    <div class="action-buttons">
                        <button class="btn btn-primary" onclick="game.startBetting()">${this.t('start_betting')}</button>
                    </div>
                </div>
            `;
        } else {
            // Get the next unclaimed crew member
            const unclaimedCrew = this.state.crew.filter(i => this.state.claims[i] === undefined);
            const playerIndex = unclaimedCrew[0];
            const player = this.state.players[playerIndex];

            // Show the player turn modal with their info
            playerTurnModal.classList.add('active');

            // Populate the modal
            document.getElementById('player-turn-label').textContent = this.t('phase_claiming');
            document.getElementById('player-turn-name').textContent = player.name;
            document.getElementById('player-turn-chips').textContent = this.formatMoney(player.chips);

            document.getElementById('player-turn-job').innerHTML = `
                <div class="player-turn-job-title">${this.t(jobTypeKey)}</div>
                <div class="player-turn-job-details">
                    <span class="player-turn-pot">${this.t('pot')}: ${this.formatMoney(totalPot)}</span>
                    <span class="player-turn-crew">${this.t('crew_size')}: ${job.crewSize}</span>
                </div>
            `;

            document.getElementById('player-turn-claim').innerHTML = `
                <label>${this.t('enter_claim')}</label>
                <input type="number" id="claim-input" min="0" max="${totalPot}" step="1000" placeholder="0" inputmode="numeric">
                <button class="btn btn-primary" onclick="game.submitClaim()">${this.t('submit_claim')}</button>
            `;

            // Render the player's hand in the modal
            const handHtml = player.hand.length > 0
                ? `<h3>${this.t('your_hand')}</h3>
                   <div class="contract-hand">
                       ${player.hand.map((contract, i) =>
                           this.renderContractCard(contract, contract.tier, i, { disabled: true, onClick: '' })
                       ).join('')}
                   </div>`
                : `<h3>${this.t('your_hand')}</h3>
                   <div class="no-contracts">No contracts in hand</div>`;

            document.getElementById('player-turn-hand').innerHTML = handHtml;

            // Clear the main action area
            actionArea.innerHTML = '';

            // Focus the input
            setTimeout(() => {
                const input = document.getElementById('claim-input');
                if (input) input.focus();
            }, 100);
        }
    }

    submitClaim() {
        const input = document.getElementById('claim-input');
        const claim = parseInt(input.value) || 0;
        const unclaimedCrew = this.state.crew.filter(i => this.state.claims[i] === undefined);
        const playerIndex = unclaimedCrew[0];

        this.state.claims[playerIndex] = claim;

        // Hide the player turn modal before showing pass device modal
        const playerTurnModal = document.getElementById('player-turn-modal');
        playerTurnModal.classList.remove('active');

        // Check if there are more crew members to claim
        const nextUnclaimed = this.state.crew.filter(i => this.state.claims[i] === undefined);
        if (nextUnclaimed.length > 0) {
            const nextPlayer = this.state.players[nextUnclaimed[0]];
            this.showModal(
                this.t('pass_device'),
                `${this.t('pass_to')} ${nextPlayer.name}. ${this.t('ready_message')}`,
                () => this.render()
            );
        } else {
            this.render();
        }
    }

    startBetting() {
        this.state.phase = 'betting';
        this.state.bets = {};

        // Get non-crew players who need to bet
        const nonCrew = this.state.players
            .map((p, i) => ({ player: p, index: i }))
            .filter(({ index }) => !this.state.crew.includes(index));

        if (nonCrew.length > 0) {
            const firstBettor = nonCrew[0].player;
            this.showModal(
                this.t('pass_device'),
                `${this.t('pass_to')} ${firstBettor.name}. ${this.t('ready_message')}`,
                () => this.render()
            );
        } else {
            this.render();
        }
    }

    renderBettingPhase() {
        const actionArea = document.getElementById('action-area');
        const playerTurnModal = document.getElementById('player-turn-modal');
        const job = this.state.currentJob;
        const totalPot = job.pot + this.state.rollover;
        const jobTypeKey = `job_${job.type.toLowerCase().replace(' ', '_')}`;

        const nonCrew = this.state.players
            .map((p, i) => ({ player: p, index: i }))
            .filter(({ index }) => !this.state.crew.includes(index));

        const allBet = nonCrew.every(({ index }) => this.state.bets[index] !== undefined);

        if (allBet || nonCrew.length === 0) {
            // Hide the player turn modal
            playerTurnModal.classList.remove('active');

            actionArea.innerHTML = `
                <div class="action-content">
                    <div class="action-buttons">
                        <button class="btn btn-primary" onclick="game.revealClaims()">${this.t('reveal_claims')}</button>
                    </div>
                </div>
            `;
        } else {
            const unbetPlayers = nonCrew.filter(({ index }) => this.state.bets[index] === undefined);
            const playerIndex = unbetPlayers[0].index;
            const player = unbetPlayers[0].player;

            // Show the player turn modal with their info
            playerTurnModal.classList.add('active');

            // Populate the modal
            document.getElementById('player-turn-label').textContent = this.t('phase_betting');
            document.getElementById('player-turn-name').textContent = player.name;
            document.getElementById('player-turn-chips').textContent = this.formatMoney(player.chips);

            document.getElementById('player-turn-job').innerHTML = `
                <div class="player-turn-job-title">${this.t(jobTypeKey)}</div>
                <div class="player-turn-job-details">
                    <span class="player-turn-pot">${this.t('pot')}: ${this.formatMoney(totalPot)}</span>
                    <span class="player-turn-crew">${this.t('crew_size')}: ${job.crewSize}</span>
                </div>
            `;

            document.getElementById('player-turn-claim').innerHTML = `
                <label>${this.t('place_bet')}</label>
                <p style="font-size: 0.875rem; color: var(--navy-blue); margin-bottom: 1rem;">${this.t('max_bet')}</p>
                <input type="number" id="bet-amount" min="0" max="6000" step="1000" placeholder="0" inputmode="numeric">
                <div class="betting-buttons" style="margin-top: 1rem;">
                    <button class="btn btn-success" onclick="game.placeBet(${playerIndex}, 'invest')">${this.t('invest')}</button>
                    <button class="btn btn-danger" onclick="game.placeBet(${playerIndex}, 'short')">${this.t('short')}</button>
                    <button class="btn btn-secondary" onclick="game.placeBet(${playerIndex}, 'pass')">${this.t('pass')}</button>
                </div>
            `;

            // Render the player's hand in the modal
            const handHtml = player.hand.length > 0
                ? `<h3>${this.t('your_hand')}</h3>
                   <div class="contract-hand">
                       ${player.hand.map((contract, i) =>
                           this.renderContractCard(contract, contract.tier, i, { disabled: true, onClick: '' })
                       ).join('')}
                   </div>`
                : `<h3>${this.t('your_hand')}</h3>
                   <div class="no-contracts">No contracts in hand</div>`;

            document.getElementById('player-turn-hand').innerHTML = handHtml;

            // Clear the main action area
            actionArea.innerHTML = '';

            // Focus the input
            setTimeout(() => {
                const input = document.getElementById('bet-amount');
                if (input) input.focus();
            }, 100);
        }
    }

    placeBet(playerIndex, type) {
        if (type === 'pass') {
            this.state.bets[playerIndex] = { type: 'pass', amount: 0 };
        } else {
            const amount = parseInt(document.getElementById('bet-amount').value) || 0;
            const player = this.state.players[playerIndex];

            if (amount > player.chips) {
                alert(this.t('error_chips'));
                return;
            }

            if (amount > 6000) {
                alert(this.t('error_max_bet'));
                return;
            }

            this.state.bets[playerIndex] = { type, amount };
            player.chips -= amount;
        }

        // Hide the player turn modal before showing pass device modal
        const playerTurnModal = document.getElementById('player-turn-modal');
        playerTurnModal.classList.remove('active');

        // Check if there are more players to bet
        const nonCrew = this.state.players
            .map((p, i) => ({ player: p, index: i }))
            .filter(({ index }) => !this.state.crew.includes(index));
        const unbetPlayers = nonCrew.filter(({ index }) => this.state.bets[index] === undefined);

        if (unbetPlayers.length > 0) {
            const nextPlayer = unbetPlayers[0].player;
            this.showModal(
                this.t('pass_device'),
                `${this.t('pass_to')} ${nextPlayer.name}. ${this.t('ready_message')}`,
                () => this.render()
            );
        } else {
            this.render();
        }
    }

    revealClaims() {
        this.state.phase = 'reveal';

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

        if (success) {
            this.state.crew.forEach(i => {
                this.state.players[i].chips += this.state.claims[i];
            });

            Object.entries(this.state.bets).forEach(([i, bet]) => {
                if (bet.type === 'invest') {
                    this.state.players[i].chips += bet.amount * 2;
                }
            });

            this.state.rollover = margin;
        } else {
            Object.entries(this.state.bets).forEach(([i, bet]) => {
                if (bet.type === 'short') {
                    this.state.players[i].chips += bet.amount * 2;
                }
            });

            this.state.rollover += totalPot;
        }

        this.state.jobHistory.push(this.state.currentJobResult);
        this.render();
    }

    renderRevealPhase() {
        const result = this.state.currentJobResult;
        const jobSection = document.getElementById('job-section');

        const claimsHtml = this.state.crew.map(i => {
            const player = this.state.players[i];
            const claim = this.state.claims[i];
            return `<div>${player.name}: ${this.formatMoney(claim)}</div>`;
        }).join('');

        const betsHtml = Object.entries(this.state.bets)
            .filter(([_, bet]) => bet.type !== 'pass')
            .map(([i, bet]) => {
                const player = this.state.players[i];
                const won = (bet.type === 'invest' && result.success) || (bet.type === 'short' && !result.success);
                return `<div>${player.name}: ${bet.type} ${this.formatMoney(bet.amount)} ${won ? '✓' : '✗'}</div>`;
            }).join('');

        jobSection.innerHTML = `
            <div class="resolution">
                <div class="resolution-result ${result.success ? 'success' : 'failure'}">
                    <h2>${result.success ? this.t('success') : this.t('failure')}</h2>
                </div>
                <div class="resolution-stats">
                    <div>${this.t('total_claims')}: ${this.formatMoney(result.totalClaims)}</div>
                    <div>${this.t('total_pot')}: ${this.formatMoney(result.totalPot)}</div>
                    <div>${this.t('margin')}: ${result.success ? '+' : ''}${this.formatMoney(result.margin)}</div>
                </div>
                <div class="resolution-details">
                    <div>
                        <h3>${this.t('claims')}</h3>
                        <div class="claims-list">${claimsHtml}</div>
                    </div>
                    <div>
                        <h3>${this.t('bets')}</h3>
                        <div class="bets-list">${betsHtml || `<div class="text-muted">${this.t('no_bets')}</div>`}</div>
                    </div>
                </div>
            </div>
        `;

        const actionArea = document.getElementById('action-area');
        actionArea.innerHTML = `
            <div class="action-content">
                <div class="action-buttons">
                    <button class="btn btn-primary" onclick="game.startCompleteContracts()">
                        ${this.t('phase_complete')}
                    </button>
                </div>
            </div>
        `;
    }

    startCompleteContracts() {
        this.state.phase = 'complete-contracts';

        // Automatically check all contracts for fulfillment
        this.state.fulfilledThisJob = [];
        const result = this.state.currentJobResult;

        this.state.players.forEach((player, playerIndex) => {
            const contractsToComplete = [];

            player.hand.forEach((contract, contractIndex) => {
                if (this.checkContractFulfillment(playerIndex, contract, result)) {
                    contractsToComplete.push({ contract, contractIndex });
                }
            });

            // Complete contracts (in reverse order to maintain indices)
            contractsToComplete.reverse().forEach(({ contract, contractIndex }) => {
                // Remove from hand
                player.hand.splice(contractIndex, 1);

                // Add to rap sheet
                if (!player.rapSheet[contract.category]) {
                    player.rapSheet[contract.category] = [];
                }
                player.rapSheet[contract.category].push(contract);

                // Add bonus to chips
                player.chips += contract.bonus;

                // Track for display
                this.state.fulfilledThisJob.push({
                    playerName: player.name,
                    contract: contract
                });
            });
        });

        this.render();
    }

    checkContractFulfillment(playerIndex, contract, result) {
        const player = this.state.players[playerIndex];
        const isOnCrew = this.state.crew.includes(playerIndex);
        const claim = this.state.claims[playerIndex] || 0;
        const bet = this.state.bets[playerIndex];
        const crewSize = result.crew.length;
        const fairShare = result.totalPot / crewSize;
        const prevJob = this.state.jobHistory.length > 1 ? this.state.jobHistory[this.state.jobHistory.length - 2] : null;
        const wasOnPrevCrew = prevJob ? prevJob.crew.includes(playerIndex) : false;

        // Get all claims sorted for position checking
        const crewClaims = result.crew.map(i => this.state.claims[i]).sort((a, b) => a - b);
        const myClaim = claim;

        switch (contract.name) {
            // EASY CONTRACTS
            case 'Quick Score':
                return isOnCrew && result.success && claim >= 3000;

            case 'Team Player':
                return isOnCrew && result.success;

            case 'Bet Winner':
                return bet && bet.type !== 'pass' && (
                    (bet.type === 'invest' && result.success) ||
                    (bet.type === 'short' && !result.success)
                );

            case 'Small Fry':
                return isOnCrew && claim === 2000;

            case 'Troublemaker':
                return isOnCrew && !result.success;

            case 'Benchwarmer':
                return !isOnCrew && result.totalPot >= 14000;

            case 'Momentum':
                return isOnCrew && result.success && prevJob && prevJob.success;

            case 'Penny Pincher':
                return player.chips >= 15000;

            case 'Nibble':
                return isOnCrew && result.success && claim <= 2000;

            case 'Lucky Guess':
                return bet && bet.type === 'invest' && result.success;

            case 'Dodged Bullet':
                return !isOnCrew && !result.success;

            case 'Fair Share':
                return isOnCrew && result.success && Math.abs(claim - fairShare) <= 1000;

            case 'Helping Hand':
                return isOnCrew && result.totalClaims <= result.totalPot * 0.8;

            case 'Side Bet':
                return bet && bet.type !== 'pass' && (
                    (bet.type === 'invest' && result.success && bet.amount >= 1000) ||
                    (bet.type === 'short' && !result.success && bet.amount >= 1000)
                );

            case 'Modesty':
                if (!isOnCrew || !result.success) return false;
                const minClaim = Math.min(...crewClaims);
                return myClaim === minClaim && crewClaims.filter(c => c === minClaim).length === 1;

            case 'Spoiler':
                return isOnCrew && !result.success && prevJob && prevJob.success;

            case 'Table Scraps':
                return isOnCrew && result.success && claim <= 1000 && result.totalPot >= 15000;

            case 'Against the Grain':
                if (!bet || bet.type === 'pass') return false;
                const myWon = (bet.type === 'invest' && result.success) || (bet.type === 'short' && !result.success);
                if (!myWon) return false;
                const oppositeBets = Object.entries(this.state.bets).filter(([i, b]) =>
                    parseInt(i) !== playerIndex && b.type !== 'pass' && b.type !== bet.type
                );
                return oppositeBets.length >= 1;

            case 'Second Fiddle':
                if (!isOnCrew || !result.success || crewSize < 4) return false;
                const sortedClaims = [...crewClaims];
                return sortedClaims.length >= 2 && myClaim === sortedClaims[1];

            case 'Cleanup Crew':
                return isOnCrew && result.success && prevJob && !prevJob.success;

            // MEDIUM CONTRACTS
            case 'Big Claim':
                return isOnCrew && result.success && claim >= 5000;

            case 'Firestarter':
                return !result.success && result.totalPot >= 12000;

            case 'Sharpshooter':
                return isOnCrew && result.success && Math.abs(claim - fairShare) <= 500;

            case 'Smart Money':
                return bet && bet.type !== 'pass' && prevJob && !prevJob.success && (
                    (bet.type === 'invest' && result.success) ||
                    (bet.type === 'short' && !result.success)
                );

            case 'Crew Builder':
                return playerIndex === this.state.chairIndex && result.success;

            case 'Smooth Sailing':
                return isOnCrew && result.success && prevJob && prevJob.success && wasOnPrevCrew;

            case 'Nest Egg':
                return player.chips >= 22000;

            case 'Calculated Risk':
                return bet && bet.type === 'short' && !result.success;

            case 'Surgical Strike':
                return isOnCrew && !result.success && Math.abs(result.margin) <= 3000;

            case 'Tight Crew':
                return isOnCrew && Math.abs(result.totalClaims - result.totalPot) <= 1000;

            case 'Anchor':
                return isOnCrew && result.success && claim >= 3000;

            case 'Fat Cat':
                const otherChips = this.state.players.filter((_, i) => i !== playerIndex).map(p => p.chips);
                return player.chips > Math.max(...otherChips);

            case 'Double Down':
                return bet && bet.type === 'invest' && bet.amount >= 4000 && result.success;

            case 'Repeat Offender':
                return isOnCrew && !result.success && prevJob && !prevJob.success;

            case "Razor's Edge":
                return isOnCrew && result.totalClaims === result.totalPot;

            case 'Kingmaker':
                return playerIndex === this.state.chairIndex && result.success && !isOnCrew;

            case 'Contrarian':
                if (!bet || bet.type === 'pass') return false;
                const iWon = (bet.type === 'invest' && result.success) || (bet.type === 'short' && !result.success);
                if (!iWon) return false;
                const oppLost = Object.entries(this.state.bets).filter(([i, b]) => {
                    if (parseInt(i) === playerIndex || b.type === 'pass') return false;
                    const theyWon = (b.type === 'invest' && result.success) || (b.type === 'short' && !result.success);
                    return !theyWon;
                });
                return oppLost.length >= 2;

            case 'Restraint':
                return isOnCrew && result.success && claim === 0;

            case 'Controlled Burn':
                return !result.success && Math.abs(result.margin) <= 2000;

            case "Lion's Share":
                if (!isOnCrew || !result.success) return false;
                const maxClaim = Math.max(...crewClaims);
                return myClaim === maxClaim && crewClaims.filter(c => c === maxClaim).length === 1;

            case 'Trendsetter':
                if (!isOnCrew || !result.success) return false;
                const sameClaims = crewClaims.filter(c => c === myClaim);
                return sameClaims.length >= 2;

            case 'Bail Out':
                // Check if there was rollover at the START of this job (from previous failures)
                return isOnCrew && result.success && (this.state.currentJob.startingRollover || 0) > 0;

            case 'Saboteur':
                return isOnCrew && !result.success && claim > fairShare;

            case 'Steady Hand':
                return isOnCrew && result.success && wasOnPrevCrew && prevJob && prevJob.success;

            case 'High Roller':
                return bet && bet.type !== 'pass' && bet.amount >= 5000 && (
                    (bet.type === 'invest' && result.success) ||
                    (bet.type === 'short' && !result.success)
                );

            // HARD CONTRACTS
            case 'Kingpin':
                const othersChips = this.state.players.filter((_, i) => i !== playerIndex).map(p => p.chips);
                return player.chips >= Math.max(...othersChips) + 4000;

            case 'Demolition Expert':
                // Check if there was rollover ≥$8,000 at the START of this job
                return !result.success && (this.state.currentJob.startingRollover || 0) >= 8000;

            case 'Masterstroke':
                if (!isOnCrew || !result.success) return false;
                const maxClaimHere = Math.max(...crewClaims);
                return myClaim === maxClaimHere && result.margin <= 2000 && result.margin >= 0;

            case 'Market Maker':
                return bet && bet.type !== 'pass' && bet.amount >= 2500 && (
                    (bet.type === 'invest' && result.success) ||
                    (bet.type === 'short' && !result.success)
                );

            case 'Untouchable':
                return isOnCrew && result.success && this.state.currentJob.isFinal;

            case 'Scorched Earth':
                return !result.success && result.totalPot >= 18000;

            case 'Last Laugh':
                if (!isOnCrew || !this.state.currentJob.isFinal) return false;
                const sortedDesc = [...crewClaims].sort((a, b) => b - a);
                return sortedDesc.length >= 2 && myClaim === sortedDesc[1];

            case 'Ironclad':
                if (!isOnCrew || !result.success) return false;
                return crewClaims.every(c => c >= 2000);

            case 'All In':
                return bet && bet.type !== 'pass' && bet.amount === 6000 && (
                    (bet.type === 'invest' && result.success) ||
                    (bet.type === 'short' && !result.success)
                );

            case 'Greed is Good':
                return isOnCrew && result.success && claim >= 6000;

            case 'Mirror Match':
                if (!isOnCrew) return false;
                const exactMatches = crewClaims.filter(c => c === myClaim);
                return exactMatches.length === 3; // Me + 2 others

            case 'Puppet Master':
                return playerIndex === this.state.chairIndex && result.success && result.margin <= 2000;

            case 'Oracle':
                if (!bet || bet.type === 'pass') return false;
                const myWin = (bet.type === 'invest' && result.success) || (bet.type === 'short' && !result.success);
                if (!myWin) return false;
                const sameDirBets = Object.entries(this.state.bets).filter(([i, b]) =>
                    parseInt(i) !== playerIndex && b.type === bet.type
                );
                return sameDirBets.length === 0;

            case 'Sole Survivor':
                if (!isOnCrew || result.success) return false;
                const underFairShare = result.crew.filter(i => this.state.claims[i] <= fairShare);
                return underFairShare.length === 1 && underFairShare[0] === playerIndex;

            case 'Photo Finish':
                return isOnCrew && result.success && Math.abs(result.totalClaims - result.totalPot) <= 500;

            default:
                return false;
        }
    }

    renderCompleteContractsPhase() {
        const actionArea = document.getElementById('action-area');
        const fulfilled = this.state.fulfilledThisJob || [];

        let fulfilledHtml = '';
        if (fulfilled.length > 0) {
            fulfilledHtml = `
                <div class="fulfilled-contracts">
                    <h3>${this.t('contracts_completed') || 'Contracts Completed!'}</h3>
                    ${fulfilled.map(f => `
                        <div class="fulfilled-item">
                            <span class="fulfilled-player">${f.playerName}</span>
                            <span class="fulfilled-contract">${f.contract.name}</span>
                            <span class="fulfilled-bonus">+${this.formatMoney(f.contract.bonus)}</span>
                        </div>
                    `).join('')}
                </div>
            `;
        } else {
            fulfilledHtml = `<p class="action-text">${this.t('no_contracts_completed') || 'No contracts completed this job.'}</p>`;
        }

        actionArea.innerHTML = `
            <div class="action-content">
                ${fulfilledHtml}
                <div class="action-buttons">
                    ${this.state.currentJob.isFinal ?
                        `<button class="btn btn-primary" onclick="game.endGame()">${this.t('finish_game')}</button>` :
                        `<button class="btn btn-primary" onclick="game.nextJob()">${this.t('next_job')}</button>`
                    }
                </div>
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
        this.state.players.forEach(p => {
            let score = p.chips;
            p.hand.forEach(contract => {
                score -= contract.penalty;
            });
            p.finalScore = score;
        });

        this.state.players.sort((a, b) => b.finalScore - a.finalScore);

        this.state.phase = 'scoring';
        this.showScreen('scoring-screen');
        this.renderScoring();
    }

    renderScoring() {
        const container = document.getElementById('final-scores');
        container.innerHTML = this.state.players.map((p, i) => `
            <div class="score-card ${i === 0 ? 'winner' : ''}">
                <div class="score-rank">${i + 1}${i === 0 ? '🏆' : ''}</div>
                <div class="score-info">
                    <div class="score-name">${p.name}</div>
                    <div class="score-details">
                        ${this.t('chips_label')}: ${this.formatMoney(p.chips)} •
                        ${this.t('completed_label')}: ${Object.values(p.rapSheet).flat().length} •
                        ${this.t('penalties_label')}: -${this.formatMoney(p.hand.reduce((sum, c) => sum + c.penalty, 0))}
                    </div>
                </div>
                <div class="score-total">${this.formatMoney(p.finalScore)}</div>
            </div>
        `).join('');

        this.updateLanguageUI();
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
        game.showScreen('game-screen');
        game.render();
    }
    game.updateLanguageUI();
});

// Handle page visibility
document.addEventListener('visibilitychange', () => {
    if (!document.hidden && game.state.phase !== 'setup') {
        game.loadState();
        game.render();
    }
});

// Export for HTML
window.game = game;
