/* ============================================================
   DEBUG RUSH — Galaga-style
   ============================================================ */

/* ============================================================
   1. CONFIGURACIÓN
   ============================================================ */

const W = 800;
const H = 600;

const PLAYER_SPRITE = '/^\\';
const PLAYER_COLOR  = '#00ff88';
const BULLET_TEXT   = 'log()';
const BULLET_COLOR  = '#00d4ff';
const ENEMY_BULLET  = 'o';

const ENEMY_TYPES = [
    { sprite: '<o>', color: '#00ff88' },
    { sprite: '[#]', color: '#00d4ff' },
    { sprite: '{*}', color: '#ffd700' },
    { sprite: '>-<', color: '#ff3860' },
    { sprite: '|@|', color: '#ff79c6' },
    { sprite: '</>', color: '#bd93f9' },
    { sprite: '[-]', color: '#4ecdc4' },
];

const CARRIER_SPRITE = '[★]';
const CARRIER_COLOR  = '#ffd700';

const WAVES = [
    { section: 0, cols: 3, rows: 2, speed: 0.6, fireRate: 0.008 },
    { section: 1, cols: 4, rows: 2, speed: 0.8, fireRate: 0.010 },
    { section: 2, cols: 5, rows: 2, speed: 1.0, fireRate: 0.012 },
    { section: 3, cols: 4, rows: 3, speed: 1.2, fireRate: 0.015 },
    { section: 4, cols: 7, rows: 2, speed: 1.5, fireRate: 0.018 },
    { section: 5, cols: 4, rows: 4, speed: 1.8, fireRate: 0.022 },
];

/* ---------- SECCIONES (con colores suaves por sección) ---------- */
const SECTIONS = [
    {
        id: 'sobre-mi', title: 'Sobre mí', icon: '👤',
        accent: '#ff8b6b', accentLight: '#fff5f0', accentBorder: 'rgba(255, 139, 107, 0.22)',
        content: `
            <div style="text-align:center;font-size:3rem;margin-bottom:.5rem;">🧑‍💻</div>
            <p>¡Hola! Soy <strong>[TU NOMBRE]</strong>, estudiante del ciclo de <strong>Sistemas Microinformáticos y Redes (SMX)</strong>.</p>
            <p>Me encanta resolver problemas, aprender cosas nuevas y hacer que las cosas funcionen. Si no funcionan... reinicio y rezo un poco. Técnica milenaria.</p>
            <h2>🎯 Objetivos</h2>
            <p>Convertirme en <strong>SysAdmin</strong> o <strong>Desarrollador Full-Stack</strong>.</p>
            <blockquote>"No soy vago, estoy en modo ahorro de energía."</blockquote>
        `,
    },
    {
        id: 'formacion', title: 'Formación', icon: '📚',
        accent: '#4a9eff', accentLight: '#eff6ff', accentBorder: 'rgba(74, 158, 255, 0.22)',
        content: `
            <h2>🎓 CFGM Sistemas Microinformáticos y Redes</h2>
            <p><strong>IES [NOMBRE INSTITUTO]</strong> · 2024 → actualidad</p>
            <p>Sistemas operativos, redes, hardware y desarrollo web.</p>
            <h2>🌐 Curso de HTML, CSS y JavaScript</h2>
            <p><strong>Plataforma online</strong> · 2024</p>
            <h2>🐙 Curso de Git y GitHub</h2>
            <p><strong>Plataforma online</strong> · 2024</p>
            <blockquote>Siempre aprendiendo. Stack Overflow es mi segundo hogar.</blockquote>
        `,
    },
    {
        id: 'habilidades', title: 'Habilidades', icon: '⚔️',
        accent: '#9b7bff', accentLight: '#f5f1ff', accentBorder: 'rgba(155, 123, 255, 0.22)',
        content: `
            <h2>⚔️ Stack técnico</h2>
            <div class="skill-row"><span class="skill-row__name">HTML5</span><div class="skill-row__bar" style="--fill:85%"></div><span class="skill-row__pct">85%</span></div>
            <div class="skill-row"><span class="skill-row__name">CSS3</span><div class="skill-row__bar" style="--fill:80%"></div><span class="skill-row__pct">80%</span></div>
            <div class="skill-row"><span class="skill-row__name">JavaScript</span><div class="skill-row__bar" style="--fill:65%"></div><span class="skill-row__pct">65%</span></div>
            <div class="skill-row"><span class="skill-row__name">Linux</span><div class="skill-row__bar" style="--fill:70%"></div><span class="skill-row__pct">70%</span></div>
            <div class="skill-row"><span class="skill-row__name">Git</span><div class="skill-row__bar" style="--fill:75%"></div><span class="skill-row__pct">75%</span></div>
            <div class="skill-row"><span class="skill-row__name">Debugging</span><div class="skill-row__bar" style="--fill:90%"></div><span class="skill-row__pct">90%</span></div>
            <div class="skill-row"><span class="skill-row__name">Docker</span><div class="skill-row__bar" style="--fill:40%"></div><span class="skill-row__pct">40%</span></div>
            <blockquote>// El porcentaje de Debugging sube si me dejas el móvil 5 minutos.</blockquote>
        `,
    },
    {
        id: 'proyectos', title: 'Proyectos', icon: '🎨',
        accent: '#ff9f43', accentLight: '#fff8ef', accentBorder: 'rgba(255, 159, 67, 0.22)',
        content: `
            <h2>🎨 Proyectos</h2>
            <h3>🎮 Debug Rush (esta web)</h3>
            <p>Portafolio convertido en Space Invaders con enemigos ASCII y tarjetas de sección.</p>
            <p><strong>Stack:</strong> HTML + CSS + JavaScript vanilla</p>
            <h3>🧮 Calculadora web</h3>
            <p>Calculadora funcional en JavaScript. Suma, resta, multiplica y divide... mayormente.</p>
            <p><strong>Stack:</strong> JavaScript · CSS</p>
            <h3>✅ To-Do List</h3>
            <p>Gestor de tareas con LocalStorage. Nunca la uso porque me recuerda todo lo pendiente.</p>
            <p><strong>Stack:</strong> JavaScript · LocalStorage</p>
        `,
    },
    {
        id: 'experiencia', title: 'Experiencia', icon: '💼',
        accent: '#ff6b9d', accentLight: '#fff0f5', accentBorder: 'rgba(255, 107, 157, 0.22)',
        content: `
            <h2>💼 Experiencia</h2>
            <h3>Prácticas en empresa</h3>
            <p><strong>[NOMBRE EMPRESA]</strong> · 2025</p>
            <p>Soporte técnico y mantenimiento. <em>"¿Has probado a apagarlo y encenderlo?"</em></p>
            <h3>Proyecto en equipo: web del centro</h3>
            <p><strong>IES [NOMBRE INSTITUTO]</strong> · 2024</p>
            <h3>Voluntariado TIC</h3>
            <p><strong>Centro cívico</strong> · 2024</p>
            <p>Enseñando a mayores a usar ordenadores. Aprendí más paciencia que en toda la ESO.</p>
        `,
    },
    {
        id: 'contacto', title: 'Contacto', icon: '📬',
        accent: '#4ecdc4', accentLight: '#f0fdfc', accentBorder: 'rgba(78, 205, 196, 0.22)',
        content: `
            <h2>📬 Contacto</h2>
            <p>¿Hablamos? Estos son mis canales:</p>
            <ul>
                <li>📧 <strong>Email:</strong> <a href="mailto:tu@email.com">tu@email.com</a></li>
                <li>🐙 <strong>GitHub:</strong> <a href="https://github.com/nizatf" target="_blank" rel="noopener">github.com/nizatf</a></li>
                <li>💼 <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener">linkedin.com/in/tu-perfil</a></li>
            </ul>
            <blockquote>Respondo más rápido que un ping a localhost. (A menos que esté en un merge conflict.)</blockquote>
        `,
    },
];

/* ============================================================
   2. ESTADO
   ============================================================ */

const state = {
    gameState: 'menu',
    score: 0,
    highScore: 0,
    lives: 3,
    wave: 0,
    combo: 1,
    comboTimer: 0,
    enemies: [],
    bullets: [],
    enemyBullets: [],
    particles: [],
    stars: [],
    player: { x: W / 2, y: H - 55, speed: 6, invuln: 0 },
    keys: { left: false, right: false, shoot: false },
    lastShot: 0,
    direction: 1,
    moveTimer: 0,
    moveInterval: 24,
    cardTriggered: false,
    shakeTime: 0,
    scoreFloats: [],
    globalDiveTimer: 0,
};

/* ============================================================
   3. DOM
   ============================================================ */

const $ = (id) => document.getElementById(id);

const menuScreen     = $('menuScreen');
const gameScreen     = $('gameScreen');
const highScoreEl    = $('highScore');
const playBtn        = $('playBtn');
const sectionsBtn    = $('sectionsBtn');
const quitBtn        = $('quitBtn');
const canvas         = $('canvas');
const ctx            = canvas.getContext('2d');
const scoreText      = $('scoreText');
const waveText       = $('waveText');
const livesText      = $('livesText');
const comboEl        = $('combo');
const cardOverlay    = $('cardOverlay');
const sectionsOverlay = $('sectionsOverlay');
const sectionsGrid   = $('sectionsGrid');
const sectionsClose  = $('sectionsClose');
const endModal       = $('endModal');
const endPanel       = $('endPanel');

/* ============================================================
   4. UTILIDADES
   ============================================================ */

const rand = (min, max) => Math.random() * (max - min) + min;
const randInt = (min, max) => Math.floor(rand(min, max + 1));

// Bezier cúbica paramétrica
function bezier(t, p0, p1, p2, p3) {
    const mt = 1 - t;
    const mt2 = mt * mt;
    const mt3 = mt2 * mt;
    const t2 = t * t;
    const t3 = t2 * t;
    return {
        x: mt3 * p0.x + 3 * mt2 * t * p1.x + 3 * mt * t2 * p2.x + t3 * p3.x,
        y: mt3 * p0.y + 3 * mt2 * t * p1.y + 3 * mt * t2 * p2.y + t3 * p3.y,
    };
}

function loadHighScore() {
    try {
        state.highScore = parseInt(localStorage.getItem('debugRushHighScore') || '0', 10);
    } catch { state.highScore = 0; }
    highScoreEl.textContent = String(state.highScore).padStart(6, '0');
}

function saveHighScore() {
    if (state.score > state.highScore) {
        state.highScore = state.score;
        try { localStorage.setItem('debugRushHighScore', String(state.highScore)); } catch {}
        highScoreEl.textContent = String(state.highScore).padStart(6, '0');
    }
}

/* ============================================================
   5. ESTRELLAS
   ============================================================ */

function initStars() {
    state.stars = [];
    for (let i = 0; i < 90; i++) {
        state.stars.push({
            x: Math.random() * W,
            y: Math.random() * H,
            speed: rand(0.2, 1.2),
            size: Math.random() < 0.8 ? 1 : 2,
            color: Math.random() < 0.7 ? '#ffffff' : (Math.random() < 0.5 ? '#00d4ff' : '#bd93f9'),
            alpha: rand(0.3, 1),
        });
    }
}

function updateStars() {
    for (const s of state.stars) {
        s.y += s.speed;
        if (s.y > H) { s.y = 0; s.x = Math.random() * W; }
    }
}

function renderStars() {
    for (const s of state.stars) {
        ctx.globalAlpha = s.alpha;
        ctx.fillStyle = s.color;
        ctx.fillRect(s.x, s.y, s.size, s.size);
    }
    ctx.globalAlpha = 1;
}

/* ============================================================
   6. JUGADOR
   ============================================================ */

function updatePlayer() {
    if (state.keys.left)  state.player.x -= state.player.speed;
    if (state.keys.right) state.player.x += state.player.speed;
    state.player.x = Math.max(30, Math.min(W - 30, state.player.x));

    if (state.player.invuln > 0) state.player.invuln--;

    if (state.keys.shoot && Date.now() - state.lastShot > 180) {
        fireBullet();
        state.lastShot = Date.now();
    }
}

function fireBullet() {
    state.bullets.push({
        x: state.player.x,
        y: state.player.y - 20,
        vy: -9,
        alive: true,
    });
}

function renderPlayer() {
    if (state.player.invuln > 0 && Math.floor(state.player.invuln / 3) % 2 === 0) return;
    ctx.save();
    ctx.font = 'bold 22px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = PLAYER_COLOR;
    ctx.shadowBlur = 20;
    ctx.fillStyle = PLAYER_COLOR;
    ctx.fillText(PLAYER_SPRITE, state.player.x, state.player.y);
    ctx.restore();
}

/* ============================================================
   7. ENEMIGOS — Movimiento tipo Galaga
   ============================================================ */

function spawnWave(waveIndex) {
    const waveConfig = WAVES[waveIndex];
    const { cols, rows } = waveConfig;
    const spacingX = 90;
    const spacingY = 70;
    const startX = (W - (cols - 1) * spacingX) / 2;
    const startY = 100;

    state.enemies = [];
    let enemyIndex = 0;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const type = ENEMY_TYPES[randInt(0, ENEMY_TYPES.length - 1)];
            const formationX = startX + col * spacingX;
            const formationY = startY + row * spacingY;

            const entryPath = createEntryPath(formationX, formationY);

            state.enemies.push({
                // Formación
                formationX,
                formationY,
                // Posición actual
                x: entryPath.p0.x,
                y: entryPath.p0.y,
                // Estado
                phase: 'entering',
                t: 0,
                path: entryPath,
                entryDelay: enemyIndex * 8,
                // Apariencia
                sprite: type.sprite,
                color: type.color,
                alive: true,
                isCarrier: false,
                // Wobble (balanceo en formación)
                wobblePhase: Math.random() * Math.PI * 2,
                wobbleAmp: rand(1, 2.5),
                wobbleSpeed: rand(0.03, 0.06),
                // Dive
                diveCooldown: rand(120, 300),
                // Return
                startX: 0,
                startY: 0,
                // Trail
                trailTimer: 0,
            });
            enemyIndex++;
        }
    }

    state.direction = 1;
    state.moveTimer = 0;
    state.cardTriggered = false;
    state.wave = waveIndex;
    state.globalDiveTimer = 0;
}

function createEntryPath(tx, ty) {
    // Entrada desde distintos lados (arriba, izquierda, derecha)
    const side = randInt(0, 3);
    let p0;

    if (side === 0 || side === 3) {
        // Desde arriba
        p0 = { x: tx + rand(-80, 80), y: -60 };
    } else if (side === 1) {
        // Desde la izquierda
        p0 = { x: -60, y: rand(40, 180) };
    } else {
        // Desde la derecha
        p0 = { x: W + 60, y: rand(40, 180) };
    }

    // Puntos de control para crear una curva bonita tipo Galaga
    const p1 = {
        x: rand(-100, W + 100),
        y: rand(-80, 100),
    };
    const p2 = {
        x: tx + rand(-180, 180),
        y: ty - rand(80, 180),
    };
    const p3 = { x: tx, y: ty };

    return { p0, p1, p2, p3 };
}

function createDivePath(enemy) {
    const p0 = { x: enemy.x, y: enemy.y };
    const side = enemy.x < W / 2 ? -1 : 1;

    // Sale hacia un lado
    const p1 = {
        x: enemy.x + side * rand(120, 220),
        y: enemy.y + rand(60, 140),
    };

    // Pasa cerca del jugador
    const p2 = {
        x: state.player.x + rand(-100, 100),
        y: state.player.y - rand(40, 100),
    };

    // Vuelve a la formación (posición actual de la formación)
    const p3 = {
        x: enemy.formationX,
        y: enemy.formationY,
    };

    return { p0, p1, p2, p3 };
}

function startDive(enemy) {
    enemy.phase = 'diving';
    enemy.t = 0;
    enemy.path = createDivePath(enemy);
}

function updateEnemies() {
    const alive = state.enemies.filter(e => e.alive);
    if (alive.length === 0) return;

    // Último enemigo → portador
    if (alive.length === 1 && !alive[0].isCarrier) {
        alive[0].isCarrier = true;
        alive[0].sprite = CARRIER_SPRITE;
        alive[0].color = CARRIER_COLOR;
    }

    state.globalDiveTimer++;

    // Mover formación entera (solo enemigos en formación)
    state.moveTimer++;
    if (state.moveTimer >= state.moveInterval) {
        state.moveTimer = 0;
        let hitEdge = false;
        for (const e of alive) {
            if (e.phase !== 'formation') continue;
            const newX = e.formationX + state.direction * 8;
            if (newX < 60 || newX > W - 60) { hitEdge = true; break; }
        }
        if (hitEdge) {
            state.direction *= -1;
        } else {
            for (const e of alive) {
                if (e.phase === 'formation') e.formationX += state.direction * 8;
            }
        }
    }

    // Actualizar cada enemigo según su fase
    for (const e of alive) {
        e.wobblePhase += e.wobbleSpeed;

        if (e.phase === 'entering') {
            if (e.entryDelay > 0) { e.entryDelay--; continue; }
            e.t += 1 / 100; // 100 frames
            if (e.t >= 1) {
                e.t = 1;
                e.phase = 'formation';
                e.diveCooldown = rand(120, 300);
            }
            const pos = bezier(e.t, e.path.p0, e.path.p1, e.path.p2, e.path.p3);
            e.x = pos.x;
            e.y = pos.y;
            emitTrail(e);
        } else if (e.phase === 'formation') {
            // Wobble suave
            e.x = e.formationX + Math.cos(e.wobblePhase) * e.wobbleAmp;
            e.y = e.formationY + Math.sin(e.wobblePhase * 1.3) * e.wobbleAmp * 0.7;

            // Intentar dive
            e.diveCooldown--;
            if (e.diveCooldown <= 0 && state.globalDiveTimer > 100) {
                const divers = alive.filter(x => x.phase === 'diving').length;
                if (divers < 2 && Math.random() < 0.03) {
                    startDive(e);
                    state.globalDiveTimer = 0;
                }
            }
        } else if (e.phase === 'diving') {
            e.t += 1 / 120; // 120 frames por dive
            if (e.t >= 1) {
                // Vuelta a la formación con suavizado
                e.phase = 'returning';
                e.t = 0;
                e.startX = e.x;
                e.startY = e.y;
            } else {
                const pos = bezier(e.t, e.path.p0, e.path.p1, e.path.p2, e.path.p3);
                e.x = pos.x;
                e.y = pos.y;
                emitTrail(e);

                // Disparo durante el dive
                if (Math.random() < 0.06 && e.t > 0.15 && e.t < 0.75) {
                    state.enemyBullets.push({
                        x: e.x,
                        y: e.y + 15,
                        vy: 5.5,
                        alive: true,
                    });
                }
            }
        } else if (e.phase === 'returning') {
            e.t += 1 / 45;
            if (e.t >= 1) {
                e.phase = 'formation';
                e.diveCooldown = rand(200, 400);
            } else {
                const ease = 1 - Math.pow(1 - e.t, 3);
                e.x = e.startX + (e.formationX - e.startX) * ease;
                e.y = e.startY + (e.formationY - e.startY) * ease;
            }
        }
    }

    // Disparos regulares de enemigos en formación
    const waveConfig = WAVES[state.wave];
    for (const e of alive) {
        if (e.phase === 'formation' && Math.random() < waveConfig.fireRate) {
            state.enemyBullets.push({
                x: e.x,
                y: e.y + 15,
                vy: 4 + state.wave * 0.3,
                alive: true,
            });
        }
    }
}

function emitTrail(enemy) {
    enemy.trailTimer++;
    if (enemy.trailTimer % 3 === 0) {
        state.particles.push({
            x: enemy.x + rand(-4, 4),
            y: enemy.y + rand(-4, 4),
            vx: rand(-0.3, 0.3),
            vy: rand(-0.3, 0.3),
            life: 20,
            maxLife: 20,
            color: enemy.color,
            size: rand(1, 2.5),
        });
    }
}

function renderEnemies() {
    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (const e of state.enemies) {
        if (!e.alive) continue;

        const isActive = e.phase === 'diving' || e.phase === 'entering';
        const sizeBoost = isActive ? 1.15 : 1;
        const glow = e.isCarrier ? 30 : (isActive ? 22 : 12);

        ctx.font = `bold ${e.isCarrier ? 26 : Math.round(20 * sizeBoost)}px monospace`;
        ctx.shadowColor = e.color;
        ctx.shadowBlur = glow;
        ctx.fillStyle = e.color;
        ctx.fillText(e.sprite, e.x, e.y);
    }
    ctx.restore();
}

/* ============================================================
   8. BALAS
   ============================================================ */

function updateBullets() {
    for (const b of state.bullets) {
        if (!b.alive) continue;
        b.y += b.vy;
        if (b.y < -20) b.alive = false;
    }
    state.bullets = state.bullets.filter(b => b.alive);

    for (const b of state.enemyBullets) {
        if (!b.alive) continue;
        b.y += b.vy;
        if (b.y > H + 20) b.alive = false;
    }
    state.enemyBullets = state.enemyBullets.filter(b => b.alive);
}

function renderBullets() {
    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.font = 'bold 14px monospace';
    ctx.shadowColor = BULLET_COLOR;
    ctx.shadowBlur = 15;
    ctx.fillStyle = BULLET_COLOR;
    for (const b of state.bullets) ctx.fillText(BULLET_TEXT, b.x, b.y);

    ctx.font = 'bold 18px monospace';
    ctx.shadowColor = '#ff3860';
    ctx.shadowBlur = 10;
    ctx.fillStyle = '#ff3860';
    for (const b of state.enemyBullets) ctx.fillText(ENEMY_BULLET, b.x, b.y);

    ctx.restore();
}

/* ============================================================
   9. COLISIONES
   ============================================================ */

function checkCollisions() {
    // Bala jugador → enemigo
    for (const b of state.bullets) {
        if (!b.alive) continue;
        for (const e of state.enemies) {
            if (!e.alive) continue;
            if (Math.abs(b.x - e.x) < 25 && Math.abs(b.y - e.y) < 22) {
                b.alive = false;
                killEnemy(e);
                break;
            }
        }
    }

    // Bala enemiga → jugador
    if (state.player.invuln <= 0) {
        for (const b of state.enemyBullets) {
            if (!b.alive) continue;
            if (Math.abs(b.x - state.player.x) < 25 && Math.abs(b.y - state.player.y) < 20) {
                b.alive = false;
                hitPlayer();
                break;
            }
        }
    }

    // Contacto enemigo en dive → jugador
    if (state.player.invuln <= 0) {
        for (const e of state.enemies) {
            if (!e.alive) continue;
            if (e.phase !== 'diving' && e.phase !== 'entering') continue;
            if (Math.abs(e.x - state.player.x) < 30 && Math.abs(e.y - state.player.y) < 26) {
                hitPlayer();
                break;
            }
        }
    }
}

/* ============================================================
   10. MUERTE
   ============================================================ */

function killEnemy(enemy) {
    enemy.alive = false;

    // Explosión
    for (let i = 0; i < 14; i++) {
        state.particles.push({
            x: enemy.x,
            y: enemy.y,
            vx: rand(-4, 4),
            vy: rand(-4, 4),
            life: 30,
            maxLife: 30,
            color: enemy.color,
            size: rand(2, 4),
        });
    }

    if (state.comboTimer > 0) state.combo = Math.min(state.combo + 1, 5);
    else state.combo = 1;
    state.comboTimer = 120;
    updateComboDisplay();

    const points = enemy.isCarrier ? 100 * state.combo : 10 * state.combo;
    state.score += points;
    scoreText.textContent = state.score;

    state.scoreFloats.push({
        x: enemy.x,
        y: enemy.y,
        vy: -1.5,
        life: 45,
        maxLife: 45,
        text: '+' + points,
        color: enemy.isCarrier ? CARRIER_COLOR : enemy.color,
        big: enemy.isCarrier,
    });

    if (enemy.isCarrier && !state.cardTriggered) {
        state.cardTriggered = true;
        triggerCard(enemy);
    }
}

function hitPlayer() {
    state.lives--;
    state.player.invuln = 90;
    state.shakeTime = 15;
    state.combo = 1;
    state.comboTimer = 0;
    updateComboDisplay();
    updateLivesDisplay();

    for (let i = 0; i < 20; i++) {
        state.particles.push({
            x: state.player.x,
            y: state.player.y,
            vx: rand(-6, 6),
            vy: rand(-6, 6),
            life: 40,
            maxLife: 40,
            color: PLAYER_COLOR,
            size: rand(2, 5),
        });
    }

    if (state.lives <= 0) setTimeout(gameOver, 600);
}

function updateLivesDisplay() {
    livesText.textContent = '❤'.repeat(Math.max(0, state.lives)) || '—';
}

function updateComboDisplay() {
    if (state.combo > 1) {
        comboEl.textContent = `COMBO ×${state.combo}`;
        comboEl.classList.add('active', 'pulse');
        setTimeout(() => comboEl.classList.remove('pulse'), 300);
    } else {
        comboEl.classList.remove('active');
    }
}

/* ============================================================
   11. PARTÍCULAS
   ============================================================ */

function updateParticles() {
    for (const p of state.particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.15;
        p.life--;
    }
    state.particles = state.particles.filter(p => p.life > 0);

    for (const f of state.scoreFloats) {
        f.y += f.vy;
        f.life--;
    }
    state.scoreFloats = state.scoreFloats.filter(f => f.life > 0);
}

function renderParticles() {
    for (const p of state.particles) {
        ctx.globalAlpha = p.life / p.maxLife;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.fillRect(p.x, p.y, p.size, p.size);
    }
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (const f of state.scoreFloats) {
        ctx.globalAlpha = Math.min(1, f.life / 20);
        ctx.font = `bold ${f.big ? 20 : 14}px monospace`;
        ctx.fillStyle = f.color;
        ctx.shadowColor = f.color;
        ctx.shadowBlur = 15;
        ctx.fillText(f.text, f.x, f.y);
    }
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
}

/* ============================================================
   12. COMBO TIMER
   ============================================================ */

function updateComboTimer() {
    if (state.comboTimer > 0) {
        state.comboTimer--;
        if (state.comboTimer === 0) {
            state.combo = 1;
            updateComboDisplay();
        }
    }
}

/* ============================================================
   13. TARJETA (nuevo estilo limpio)
   ============================================================ */

async function triggerCard(enemy) {
    state.gameState = 'card';

    const rect = canvas.getBoundingClientRect();
    const screenX = rect.left + (enemy.x / W) * rect.width;
    const screenY = rect.top + (enemy.y / H) * rect.height;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    await sleep(600);

    const sectionIndex = WAVES[state.wave].section;
    const section = SECTIONS[sectionIndex];

    showCard(section, sectionIndex + 1, screenX - centerX, screenY - centerY, () => {
        state.gameState = 'playing';
        nextWaveOrVictory();
    });
}

function showCard(section, number, offsetX = 0, offsetY = 0, onClose) {
    cardOverlay.innerHTML = `
        <div class="card-overlay__backdrop"></div>
        <div class="card" id="cardEl" style="
            --start-x: ${offsetX}px;
            --start-y: ${offsetY}px;
            --accent: ${section.accent};
            --accent-light: ${section.accentLight};
            --accent-border: ${section.accentBorder};
        ">
            <div class="card__header">
                <div class="card__icon-wrap">
                    <span class="card__icon">${section.icon}</span>
                </div>
                <div class="card__title-wrap">
                    <div class="card__eyebrow">Sección ${number} de 6 · Desbloqueada</div>
                    <h2 class="card__title">${section.title}</h2>
                </div>
                <button class="card__close" id="cardClose" aria-label="Cerrar">×</button>
            </div>
            <div class="card__body">${section.content}</div>
        </div>
    `;

    cardOverlay.classList.add('active');
    requestAnimationFrame(() => cardOverlay.classList.add('show'));

    const close = () => {
        cardOverlay.classList.remove('show');
        cardOverlay.classList.add('hide');
        setTimeout(() => {
            cardOverlay.classList.remove('active', 'hide');
            cardOverlay.innerHTML = '';
            onClose?.();
        }, 400);
    };

    $('cardClose').addEventListener('click', close);

    // Cerrar también con ESC o clic en el backdrop
    const onKey = (e) => {
        if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            document.removeEventListener('keydown', onKey);
            close();
        }
    };
    document.addEventListener('keydown', onKey);

    cardOverlay.querySelector('.card-overlay__backdrop').addEventListener('click', () => {
        document.removeEventListener('keydown', onKey);
        close();
    });
}

function nextWaveOrVictory() {
    const nextIndex = state.wave + 1;
    if (nextIndex >= WAVES.length) { victory(); return; }
    state.enemies = [];
    state.bullets = [];
    state.enemyBullets = [];
    state.cardTriggered = false;
    waveText.textContent = (nextIndex + 1) + '/' + WAVES.length;
    setTimeout(() => spawnWave(nextIndex), 400);
}

/* ============================================================
   14. GAME OVER / VICTORY
   ============================================================ */

function gameOver() {
    state.gameState = 'gameover';
    saveHighScore();

    endPanel.className = 'modal__panel modal__panel--gameover';
    endPanel.innerHTML = `
        <div class="modal__icon">💀</div>
        <h2 class="modal__title">GAME OVER</h2>
        <div class="modal__stats">
            <div class="modal__stat"><span>Score</span><b>${state.score}</b></div>
            <div class="modal__stat"><span>Oleada</span><b>${state.wave + 1}/${WAVES.length}</b></div>
            <div class="modal__stat"><span>High Score</span><b>${state.highScore}</b></div>
        </div>
        <button class="modal__btn" id="retryBtn">REINTENTAR</button>
        <button class="modal__btn" id="menuBtn" style="border-color:var(--gray);color:var(--gray);margin-top:.5rem;">MENÚ</button>
    `;
    endModal.classList.add('active');

    $('retryBtn').addEventListener('click', () => { endModal.classList.remove('active'); startGame(); });
    $('menuBtn').addEventListener('click', () => { endModal.classList.remove('active'); toMenu(); });
}

function victory() {
    state.gameState = 'victory';
    saveHighScore();

    endPanel.className = 'modal__panel';
    endPanel.innerHTML = `
        <div class="modal__icon">🏆</div>
        <h2 class="modal__title">¡VICTORIA!</h2>
        <p style="color:var(--cyan);margin-bottom:1rem;">Has liberado el portafolio entero</p>
        <div class="modal__stats">
            <div class="modal__stat"><span>Score final</span><b>${state.score}</b></div>
            <div class="modal__stat"><span>High Score</span><b>${state.highScore}</b></div>
            <div class="modal__stat"><span>Vidas restantes</span><b>${state.lives}</b></div>
        </div>
        <p style="color:var(--gray);font-size:.85rem;margin-bottom:1rem;">
            Gracias por jugar 🎮<br>
            ¿Hablamos? <a href="mailto:tu@email.com" style="color:var(--cyan);">tu@email.com</a>
        </p>
        <button class="modal__btn" id="againBtn">JUGAR DE NUEVO</button>
        <button class="modal__btn" id="menuBtn" style="border-color:var(--gray);color:var(--gray);margin-top:.5rem;">MENÚ</button>
    `;
    endModal.classList.add('active');

    $('againBtn').addEventListener('click', () => { endModal.classList.remove('active'); startGame(); });
    $('menuBtn').addEventListener('click', () => { endModal.classList.remove('active'); toMenu(); });
}

/* ============================================================
   15. GAME FLOW
   ============================================================ */

function startGame() {
    state.gameState = 'playing';
    state.score = 0;
    state.lives = 3;
    state.combo = 1;
    state.comboTimer = 0;
    state.enemies = [];
    state.bullets = [];
    state.enemyBullets = [];
    state.particles = [];
    state.scoreFloats = [];
    state.player.x = W / 2;
    state.player.invuln = 0;
    state.lastShot = 0;
    state.cardTriggered = false;
    state.wave = 0;
    state.globalDiveTimer = 0;

    scoreText.textContent = '0';
    waveText.textContent = '1/' + WAVES.length;
    updateLivesDisplay();
    updateComboDisplay();

    menuScreen.classList.remove('active');
    gameScreen.classList.add('active');

    initStars();
    spawnWave(0);

    if (!rafRunning) { rafRunning = true; loop(); }
}

function toMenu() {
    state.gameState = 'menu';
    gameScreen.classList.remove('active');
    menuScreen.classList.add('active');
    loadHighScore();
    state.enemies = [];
    state.bullets = [];
    state.enemyBullets = [];
    state.particles = [];
    state.scoreFloats = [];
}

/* ============================================================
   16. RENDER LOOP
   ============================================================ */

let rafRunning = false;

function loop() {
    if (!rafRunning) return;

    ctx.save();

    if (state.shakeTime > 0) {
        ctx.translate(rand(-5, 5), rand(-5, 5));
        state.shakeTime--;
    }

    ctx.fillStyle = '#02030a';
    ctx.fillRect(0, 0, W, H);

    updateStars();
    renderStars();

    if (state.gameState === 'playing' || state.gameState === 'card') {
        if (state.gameState === 'playing') {
            updatePlayer();
            updateEnemies();
            updateBullets();
            checkCollisions();
            updateComboTimer();
        }
        updateParticles();

        renderEnemies();
        renderBullets();
        renderParticles();
        renderPlayer();
    }

    ctx.restore();
    requestAnimationFrame(loop);
}

/* ============================================================
   17. INPUT
   ============================================================ */

document.addEventListener('keydown', (e) => {
    if (state.gameState === 'menu') return;
    if (state.gameState === 'card') return;
    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') state.keys.left = true;
    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') state.keys.right = true;
    if (e.key === ' ' || e.key === 'ArrowUp') { e.preventDefault(); state.keys.shoot = true; }
    if (e.key === 'Escape') toMenu();
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') state.keys.left = false;
    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') state.keys.right = false;
    if (e.key === ' ' || e.key === 'ArrowUp') state.keys.shoot = false;
});

document.querySelectorAll('.touch-btn').forEach(btn => {
    const key = btn.dataset.key;
    const press = (e) => {
        e.preventDefault();
        btn.classList.add('pressed');
        if (key === 'left') state.keys.left = true;
        if (key === 'right') state.keys.right = true;
        if (key === 'shoot') state.keys.shoot = true;
    };
    const release = (e) => {
        e.preventDefault();
        btn.classList.remove('pressed');
        if (key === 'left') state.keys.left = false;
        if (key === 'right') state.keys.right = false;
        if (key === 'shoot') state.keys.shoot = false;
    };
    btn.addEventListener('pointerdown', press);
    btn.addEventListener('pointerup', release);
    btn.addEventListener('pointerleave', release);
    btn.addEventListener('pointercancel', release);
});

/* ============================================================
   18. BOTONES
   ============================================================ */

playBtn.addEventListener('click', startGame);

quitBtn.addEventListener('click', () => {
    if (confirm('¿Salir al menú? Perderás el progreso actual.')) toMenu();
});

sectionsBtn.addEventListener('click', () => {
    renderSections();
    sectionsOverlay.classList.add('active');
});

sectionsClose.addEventListener('click', () => sectionsOverlay.classList.remove('active'));
sectionsOverlay.addEventListener('click', (e) => {
    if (e.target === sectionsOverlay) sectionsOverlay.classList.remove('active');
});

function renderSections() {
    sectionsGrid.innerHTML = '';
    SECTIONS.forEach((section, idx) => {
        const btn = document.createElement('button');
        btn.className = 'section-btn';
        btn.innerHTML = `
            <span class="section-btn__icon">${section.icon}</span>
            <span class="section-btn__title">${section.title}</span>
            <span class="section-btn__arrow">→</span>
        `;
        btn.addEventListener('click', () => {
            sectionsOverlay.classList.remove('active');
            showCard(section, idx + 1);
        });
        sectionsGrid.appendChild(btn);
    });
}

/* ============================================================
   19. HELPERS
   ============================================================ */

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

/* ============================================================
   20. ARRANQUE
   ============================================================ */

loadHighScore();
initStars();
renderStars();