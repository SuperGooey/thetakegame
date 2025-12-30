# THE TAKE

*A Game of Heists, Greed, and Betrayal*

## About

**THE TAKE** is a social deduction and negotiation game for 5–12 players where freelance criminals work together on heists while secretly pursuing their own agendas through contracts.

This repository contains two digital implementations:

### 🎮 Full Digital Game (`index.html`)
A complete digital implementation that manages:
- Player chips and money
- Contract drafting and board management
- Job execution and betting
- Rap Sheet tracking and set bonuses
- Full game state and turn order

**Use this when:** Playing entirely digitally without physical components

### 📊 Job Tracker Companion App (`tracker.html`)
A minimalist companion app that **only** tracks:
- Job deck progression
- Success/Failure outcomes
- Rollover calculations
- Job history visualization

**Use this when:** Playing with physical chips and contract cards, but want digital help tracking the job deck and rollover amounts

---

## 🎯 Job Tracker - Quick Start

The **Job Tracker** is designed to run on a tablet at the center of your game table.

### Features

✨ **Ultra-minimalist noir aesthetic** - High contrast, table-readable
🎲 **Auto-shuffled job deck** - Final Job always placed last
💰 **Automatic rollover calculation** - No mental math required
📈 **Visual job history** - See success/failure patterns at a glance
💾 **Auto-save state** - Refresh-safe, survives browser crashes
📱 **Mobile responsive** - Works on phones, tablets, and desktop

### How to Use

1. **Open `tracker.html`** in any modern browser
2. **Click "Start New Game"** - Shuffles the job deck
3. **For each job:**
   - View the current job details (type, crew size, pot + rollover)
   - Click **SUCCESS** or **FAILURE** after the job resolves
   - If SUCCESS: Enter the total amount claimed by the crew
   - Click **Next Job** to continue
4. **Repeat** until the Final Job completes
5. **View game summary** with full history

### What It Tracks

| Feature | Details |
|---------|---------|
| **Job Deck** | 3 Small, 4 Medium, 3 Large, 2 Huge, 1 Final Job (shuffled) |
| **Current Pot** | Base pot + rolled over money from failures |
| **History** | Visual dots showing success (green) / failure (red) |
| **Rollover** | Automatically calculated based on claims vs. pot |

### What It Doesn't Track

The tracker intentionally does **NOT** manage:
- Player chips/money
- Contract cards and drafting
- Crew selection
- Betting (invest/short)
- Rap Sheets and set bonuses
- Turn order or chair rotation

**These are handled with physical components at the table.**

---

## 🎨 Design Philosophy

The Job Tracker embraces **extreme minimalism**:

- **Noir color palette** - Black background, gold money, green/red results
- **Large typography** - Readable from across the table
- **Zero cognitive load** - One clear action at a time
- **Touch-optimized** - Big buttons for tablet use
- **No distractions** - Only essential information

---

## 🚀 Deployment

### GitHub Pages (Recommended)

Both apps are ready to deploy to GitHub Pages:

1. Push to GitHub
2. Enable Pages in repository settings
3. Access at: `https://yourusername.github.io/thetakegame/`
   - Full game: `/index.html`
   - Job tracker: `/tracker.html`

### Local Use

Simply open either HTML file in a web browser. No server required.

---

## 📱 Recommended Setup

### For Physical Play + Tracker

- **1 tablet/laptop** running `tracker.html` (visible to all players)
- **Physical poker chips** for money management
- **Physical contract cards** (print from game rules)
- **Paper and pencils** for writing claims

### For Fully Digital Play

- **1 device per player** (or hot-seat on one device)
- Open `index.html`
- Pass device between players for private actions

---

## 🛠️ Technical Details

### Job Tracker Tech Stack
- **Pure vanilla JavaScript** - No frameworks, no dependencies
- **localStorage** - Persistent game state
- **CSS Grid & Flexbox** - Responsive layout
- **CSS custom properties** - Consistent theming

### Browser Compatibility
- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

### File Structure
```
thetakegame/
├── index.html          # Full digital game
├── game.js             # Full game logic
├── styles.css          # Full game styles
├── tracker.html        # Job tracker companion app
├── tracker.js          # Tracker logic (minimalist)
├── tracker.css         # Tracker styles (noir aesthetic)
└── README.md           # This file
```

---

## 🎲 Game Rules

For complete game rules, contract lists, and strategy tips, see the full rulebook PDF (not included in this repository).

**Quick Summary:**
- Each job has a pot that the crew splits
- Players secretly write how much they claim
- If total claims ≤ pot: SUCCESS (everyone gets paid, excess rolls over)
- If total claims > pot: FAILURE (nobody gets paid, entire pot rolls over)
- Complete contracts for bonuses, build Rap Sheet for set bonuses
- Player with most money (minus penalties) at game end wins

---

## 📄 License

This is a fan-made digital companion for **THE TAKE**. Game design and rules are property of their original creators.

Digital implementation: MIT License

---

## 🤝 Contributing

Suggestions and improvements welcome! This is designed to be a lightweight companion tool, so please keep that philosophy in mind for any additions.

---

**Good luck. Trust no one. Take everything.**
