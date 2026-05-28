// ===== PROJECT DATA =====
const projects = [
    { name: "LOVE TO FRIENDSHIP", type: "Short Film", role: "Direction & Editing", year: "2024", desc: "A short film exploring the evolving dynamics between love and friendship.", accent: "#ff6b6b", video: "assets/Love To Frienship.mp4" },
    { name: "A GIRL KNOWS", type: "Poetry", role: "Written by Debotri Ghosh", year: "2024", desc: "A girl knows well her priorities,\nshe balances life with clarity—\nher personal world, her working side,\nshe walks both paths with equal stride.\n\nA girl knows clearly where she stands,\nso dear men, please understand—\ndon't think she leans, don't think she bends,\nshe holds her ground, she won't pretend.\n\nShe knows to survive, to give, provide,\nfor herself and those beside.\nShe builds her strength with quiet grace,\nno borrowed light, no borrowed place.\n\nA girl is logic, heart, and soul,\nnot empty minds that just control—\nshe feels, she thinks, she draws her line,\nwith depth that others fail to find.\n\nA girl can leave, though she has stayed,\nthrough all the love and time she gave.\nShe knows the moment love must end,\nwhen staying breaks more than it mends.\n\nShe falls, she breaks—but still she climbs,\nshe rises stronger every time.\n\nSo never speak as if you knew\nwhat a girl can't be, or cannot do.", accent: "#a29bfe", image: "assets/agk.jpeg" },
    { name: "TRUE COLOURS", type: "Poetry", role: "Written by Debotri Ghosh", year: "2024", desc: "Everyone sees me in different colours.\nTo some, I'm bright and full of life;\nto others, I'm dull and quiet.\nSome see drama, others see calm.\nI've been called responsible, mature, immature—\npatient and impatient—everything, really.\n\nWhen people tell me who they think I am,\nI either laugh or stay quiet.\nSometimes, for those close to me, I explain.\n\nBut lately, I no longer feel the need to.\nI know my true colours,\nand that's enough for me.\n\nPeople can paint me however they choose—\nbut they'll never see me the way I see myself.\nThat's where my truth begins,\nnot where their opinions end.", accent: "#74b9ff", image: "assets/true_colours.jpg" },
    { name: "TO MY GIRLS", type: "Poetry", role: "Written by Debotri Ghosh", year: "2024", desc: "In a world that tried to break us, we learned how\nto bleed and still call it strength.\n\nWe chose softness, not because we are fragile,\nbut because we refused to become what hurt us —\n— and somehow, that made us unbreakable.\n\nWe don't compete, we don't destroy—we gather, we hold,\nwe rebuild each other in the quiet moments\nno one else sees.\n\nWhen one of us forgets who she is,\nthe rest whisper it back into her bones\nuntil she remembers.\n\nThey say women are each other's downfall,\nbut they've never stood in something like this—\nwhere love is fierce, loyalty is silent,\nand strength is shared like breath.\n\nWe are not weakness, we are not rivals—\nwe are the fire that refuses to die,\nthe hands that refuse to let go,\nthe reason we rise, again and\nagain, no matter how many\ntimes the world tries to bury us.", accent: "#ff9a9e", image: "assets/to_my_girls.jpg" },
    { name: "ONE WORD", type: "Poetry", role: "Written by Debotri Ghosh", year: "2024", desc: "\"Describe me in one word,\" he said.\nBut before the answer could leave her lips,\nthe line went dead.\n\nNow she's left with a different silence,\nand a question he didn't stay to hear:\nWhat do you do when your home\npushes you away?", accent: "#fdcb6e", image: "assets/one_word.jpg" },
    { name: "NUMB YOUR PAIN", type: "Poetry", role: "Written by Debotri Ghosh", year: "2024", desc: "How do you numb your pain, even after you have tried everything,\nso that you don't feel the pain at all? Why is it so unbearable? Why\ncan't it go away so that we can live, even just a little bit?", accent: "#3498db", image: "assets/numb_your_pain.jpg" },
    { name: "I TRIED EVERYTHING", type: "Poetry", role: "Written by Debotri Ghosh", year: "2024", desc: "You think I haven't seriously tried to move on. You think I haven't forced myself to hate you. You think I created an imaginary world where you and I are still together.\n\nBut let me tell you something. I tried everything to forget you — to forget the love I have for you.\n\nAnd every single time, I failed.\n\nAnd no, I never created an imaginary world. Everything that is happening to me, and to us, is very real.\n\nThe only difference is everyone around us can see it too… except you.\n\nBut I won't try anymore. Because you asked me to stop.", accent: "#e67e22", image: "assets/forget_you.jpg" },
    { name: "RISE UP", type: "Poetry", role: "Written by Debotri Ghosh", year: "2024", desc: "13 March 2026 at 12:26 AM\n\nYou know what? I should have been proud of\nmyself a long time ago, but better late than never,\nright? Also, I guess it’s the right time to say it\nproudly. It’s like when the time comes, it happens.\n\nBut for that, I also had to accept the fact that I\nam a beautiful person too — to withhold. Withhold\nthe holding in a beautiful, soft way so that I don't\nfeel like I have to be hard on myself.\n\nIt’s a beautiful expression and feeling, and if\nothers don’t get that, it’s okay too because it’s\ntheir loss, to be honest.\n\nSo rise up.", accent: "#0abde3", image: "assets/rise_up.jpg" },
    { name: "BALANCE", type: "Poetry", role: "Written by Debotri Ghosh", year: "2024", desc: "1 April 2025 at 11:57 AM\n\nLove isn't always a perfect 50/50 balance. Some\ndays, one gives 90 while the other can only\nmanage the bare minimum, and that's okay.\nThere will be times when you have the strength to\ncarry more, and times when they do. True love is\nabout pulling each other through, finding balance\nin the imbalance, and meeting halfway—or even\ngoing the extra mile when needed.\n\nIt's about pulling each other through, holding on\neven when it's tough, sacrificing when needed,\nsupporting without question, understanding\nwithout words. It's about giving space, allowing\ntime to heal, and still being there—always. At the\nend of the day, no matter what, it's about\nchoosing each other. Again and again.", accent: "#f1c40f", image: "assets/balance.jpg" },
    { name: "BE PROUD", type: "Poetry", role: "Written by Debotri Ghosh", year: "2024", desc: "13 March 2026 at 12:26 AM\n\nYou know what? I should have been proud of\nmyself a long time ago, but better late than never,\nright? Also, I guess it’s the right time to say it\nproudly. It’s like when the time comes, it happens.\n\nBut for that, I also had to accept the fact that I\nam a beautiful person too — to withhold. Withhold\nthe holding in a beautiful, soft way so that I don't\nfeel like I have to be hard on myself.\n\nIt’s a beautiful expression and feeling, and if\nothers don’t get that, it’s okay too because it’s\ntheir loss, to be honest.\n\nSo rise up.", accent: "#9b59b6", image: "assets/be_proud.jpg" },
    { name: "WOMEN'S DAY", type: "Essay", role: "Written by Debotri Ghosh", year: "2026", desc: "8 March 2026 at 11:56 AM\n\nHappy Women's Day to everyone, isn't it?\n\nToday, more than most days, women will receive\nwishes and appreciation. But the tragic part is\nthat we celebrate this day by saying women can\nhandle everything, that they are strong enough to\nfight for their rights like a boss, and so much\nmore.\n\nBut what this actually reminds them is that they\nhave to be strong, handle everything, and keep\nfighting for their rights.\n\nSo the real question is: is this truly a celebration,\nor just a reminder of a curse?", accent: "#78e08f", image: "assets/womens_day.jpg" },
    { name: "SIGNS", type: "Thoughts", role: "Written by Debotri Ghosh", year: "2026", desc: "7 March 2026 at 1:52 PM\n\nThe universe can give you all the signs and\nsynchronicities, but if you are rigid or a fool, you\nwill never understand them—and you lose. You\nlose what actually belongs to you.", accent: "#e77f67", image: "assets/signs.jpg" },
    { name: "FOREVER GONE", type: "Short Film", role: "Video", year: "2026", desc: "A poignant visual exploration of letting go, fragmented memories, and the spaces left behind.", accent: "#686de0", video: "assets/fg.mp4" },
    { name: "NEW BEGINNINGS", type: "Short Film", role: "Video", year: "2026", desc: "A cinematic glimpse into new dawn and starting over.", accent: "#f9ca24", video: "assets/new.mp4" },
    { name: "THE JOURNEY", type: "Short Film", role: "Video", year: "2026", desc: "A cinematic follow-up piece exploring the continuation of the path.", accent: "#ff6348", video: "assets/new2.mp4" },
    { name: "BUILDINGS", type: "Thoughts", role: "Written by Debotri Ghosh", year: "2026", desc: "They are not just buildings — they are living, because\nthey carry stories, each one different from the next.", accent: "#e74c3c", image: "assets/buildings.jpg" },
    { name: "SIREN'S CALL", type: "Poetry", role: "Written by Debotri Ghosh", year: "2026", desc: "26 February 2026 at 1:15 AM\n\nOur love story is very peaceful. Can you feel it\ntoo? Because I can — but not fully. To fully feel it, I\nsense you slipping in between.\n\nCan't you feel it through your bones, through\nevery part of your body, like a siren's call? I\ncannot express this in words — it's more\nsomething you put into place, something you feel,\nsomething you acquire.", accent: "#e056fd", image: "assets/sirens_call.jpg" },
    { name: "SAFER GROUND", type: "Thoughts", role: "Written by Debotri Ghosh", year: "2026", desc: "It's strangely ironic how the people who demean and taunt us rarely hear\nthe voice of our anger or pain, while those who speak truth or genuinely\nwant the best for us end up facing it instead. We stay silent where reaction\nis most deserved, yet unleash our frustration on safer ground. The rage\nmeant for cruelty finds its way to honesty, and the hurt caused by malice is\nexpressed to care. It's not because the truth wounds us more, but because\nit reaches us — and somehow, that makes all the difference.", accent: "#636e72", image: "assets/safer_ground.jpg" },
    { name: "THE CAGE", type: "Poetry", role: "Written by Debotri Ghosh", year: "2026", desc: "Can I go back to the years when\nI didn't have anxiety attacks —\nwhen my heart didn't pound as if\nit were trying to break free from\nmy rib cage, causing pain in my\nlungs, back, and chest? A time\nwhen I didn't feel like I was dying,\nleft only with pain so intense it\nfeels unbearable.\n\nIs that too much to ask?\n\nNo. Because feeling like this so\nfrequently makes it seem easier\nto die than to keep living through\nit.", accent: "#6c5ce7", image: "assets/the_cage.jpg" },

];

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    initCardTilt();
    initDraggableCards();
    initModals();
    initSidebarHover();
    initStatusClock();
    initGallery();
});

// ===== TILE TILT ON HOVER =====
function initCardTilt() {
    const tiles = document.querySelectorAll('.tile');

    tiles.forEach(tile => {
        tile.addEventListener('mousemove', (e) => {
            const rect = tile.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;

            const rotateX = (y - 0.5) * -8;
            const rotateY = (x - 0.5) * 8;

            tile.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03) translateY(-2px)`;
        });

        tile.addEventListener('mouseleave', () => {
            tile.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), border-color 0.35s ease, box-shadow 0.35s ease';
            tile.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1) translateY(0)';
            setTimeout(() => { tile.style.transition = ''; }, 500);
        });
    });
}

// ===== SIDEBAR HOVER =====
function initSidebarHover() {
    const icons = document.querySelectorAll('.sidebar__icon');
    icons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            // Skip if it's a link
            if (icon.tagName === 'A') return;
            // Bounce animation
            icon.style.transition = 'transform 0.12s ease';
            icon.style.transform = 'scale(0.85)';
            setTimeout(() => {
                icon.style.transform = 'scale(1.15)';
                setTimeout(() => {
                    icon.style.transition = 'transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                    icon.style.transform = 'scale(1)';
                }, 120);
            }, 120);
        });
    });
}

// ===== STATUS CLOCK =====
function initStatusClock() {
    const el = document.getElementById('status-time');
    function tick() {
        const now = new Date();
        el.textContent = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    }
    tick();
    setInterval(tick, 1000);
}

// ===== MODALS =====
function initModals() {
    const overlay = document.getElementById('modal-overlay');
    const closeBtn = document.getElementById('modal-close-btn');
    const tiles = document.querySelectorAll('.tile');

    tiles.forEach((tile, index) => {
        tile.addEventListener('click', (e) => {
            if (window.isDraggingCard) {
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            openModal(index);
        });
    });

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // CV Modal Logic
    const cvTrigger = document.getElementById('cv-trigger');
    const cvModal = document.getElementById('cv-modal');
    const cvCloseBtn = document.getElementById('cv-modal-close');

    if (cvTrigger && cvModal && cvCloseBtn) {
        cvTrigger.addEventListener('click', () => {
            cvModal.classList.add('active');
            cvModal.classList.remove('hidden');
        });

        cvCloseBtn.addEventListener('click', () => {
            cvModal.classList.remove('active');
            setTimeout(() => cvModal.classList.add('hidden'), 400); // match transition
        });

        cvModal.addEventListener('click', (e) => {
            if (e.target === cvModal) {
                cvModal.classList.remove('active');
                setTimeout(() => cvModal.classList.add('hidden'), 400);
            }
        });
    }
}

function openModal(idx) {
    const p = projects[idx] || projects[0];
    const overlay = document.getElementById('modal-overlay');
    const tile = document.querySelectorAll('.tile')[idx];
    const thumbEl = tile ? tile.querySelector('.tile__bg') : null;

    document.getElementById('modal-title').textContent = p.name;
    document.getElementById('modal-name').textContent = p.name;
    document.getElementById('modal-type-tag').textContent = p.type;
    document.getElementById('modal-year-tag').textContent = p.year;
    document.getElementById('modal-role').textContent = p.role;
    document.getElementById('modal-desc').textContent = p.desc;

    const hero = document.getElementById('modal-hero');
    const video = document.getElementById('modal-video');
    const videoSrc = document.getElementById('modal-video-src');
    const imageElem = document.getElementById('modal-image');

    // If project has a video, show video player
    if (p.video) {
        imageElem.style.display = 'none';
        videoSrc.src = p.video;
        video.load();
        video.style.display = 'block';
        hero.style.background = '#000';
        hero.style.height = 'auto';
        video.play().catch(() => {});
    } else if (p.image) {
        video.style.display = 'none';
        video.pause();
        imageElem.style.display = 'block';
        imageElem.src = p.image;
        hero.style.height = 'auto';
        hero.style.background = 'transparent';
    } else {
        video.style.display = 'none';
        imageElem.style.display = 'none';
        video.pause();
        hero.style.height = '160px';
        hero.style.minHeight = '0';
        if (thumbEl) {
            hero.style.background = thumbEl.style.background;
        }
    }

    // Accent the title bar
    document.getElementById('modal-name').style.color = p.accent;

    overlay.classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal-overlay').classList.add('hidden');
    const video = document.getElementById('modal-video');
    video.pause();
    video.currentTime = 0;
}

// ===== SUBTLE HOVER SOUND =====
let audioCtx = null;

document.addEventListener('click', () => {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}, { once: true });

function playTick() {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.frequency.value = 600 + Math.random() * 300;
    osc.type = 'sine';
    gain.gain.value = 0.02;
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.06);
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 0.06);
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.tile').forEach(c => c.addEventListener('mouseenter', playTick));
    document.querySelectorAll('.sidebar__icon').forEach(i => i.addEventListener('mouseenter', playTick));
});

// ===== CENTRAL GALLERY LOGIC =====

// Gallery Assets (Populated via user uploads)
const galleryAssets = [
    { type: "image", url: "assets/gallery_1.jpg", featured: false },
    { type: "image", url: "assets/gallery_2.jpg", featured: false },
    { type: "image", url: "assets/gallery_3.jpg", featured: false },
    { type: "image", url: "assets/gallery_4.jpg", featured: true },
    { type: "image", url: "assets/gallery_5.jpg", featured: false },
    { type: "image", url: "assets/gallery_6.jpg", featured: false },
    { type: "image", url: "assets/gallery_7.jpg", featured: false },
    { type: "image", url: "assets/gallery_8.jpg", featured: false },
    { type: "image", url: "assets/gallery_9.jpg", featured: true },
    { type: "image", url: "assets/gallery_10.jpg", featured: false },
    { type: "image", url: "assets/gallery_11.jpg", featured: false },
    { type: "image", url: "assets/gallery_12.jpg", featured: false },
    { type: "image", url: "assets/gallery_13.jpg", featured: true },
    { type: "image", url: "assets/gallery_14.jpg", featured: false },
    { type: "image", url: "assets/gallery_15.jpg", featured: false },
    { type: "image", url: "assets/gallery_16.jpg", featured: false },
    { type: "image", url: "assets/gallery_17.jpg", featured: false },
    { type: "image", url: "assets/gallery_18.jpg", featured: false },
    { type: "image", url: "assets/gallery_19.jpg", featured: false },
    { type: "image", url: "assets/gallery_20.jpg", featured: false },
    { type: "image", url: "assets/gallery_21.jpg", featured: false },
    { type: "image", url: "assets/gallery_22.jpg", featured: false },
    { type: "image", url: "assets/gallery_23.jpg", featured: false },
    { type: "image", url: "assets/gallery_24.jpg", featured: false },
    { type: "image", url: "assets/gallery_25.jpg", featured: false }
];

function initGallery() {
    const trigger = document.getElementById("gallery-trigger");
    const modal = document.getElementById("gallery-modal");
    const closeBtn = document.getElementById("gallery-modal-close");
    const grid = document.getElementById("gallery-grid");

    if (!trigger || !modal) return;

    // Populate grid
    galleryAssets.forEach(asset => {
        const item = document.createElement("div");
        item.className = "gallery-item" + (asset.featured ? " featured" : "");
        
        let mediaEl;
        if (asset.type === "image") {
            mediaEl = document.createElement("img");
            mediaEl.src = asset.url;
            mediaEl.loading = "lazy";
            
            // Justified gallery logic: calc natural aspect ratio
            mediaEl.onload = function() {
                const ratio = this.naturalWidth / this.naturalHeight;
                item.style.flexGrow = 0; // Disable stretching for exact centering
                item.style.width = (ratio * 250) + "px";
            };
        } else if (asset.type === "video") {
            mediaEl = document.createElement("video");
            mediaEl.src = asset.url;
            mediaEl.autoplay = true;
            mediaEl.loop = true;
            mediaEl.muted = true;
            
            // Videos also need aspect ratio calc on load metadata
            mediaEl.addEventListener('loadedmetadata', function() {
                const ratio = this.videoWidth / this.videoHeight;
                item.style.flexGrow = 0; // Disable stretching for exact centering
                item.style.width = (ratio * 250) + "px";
            });
        }

        item.appendChild(mediaEl);
        grid.appendChild(item);

        // Lightbox Click Listener
        item.addEventListener("click", () => {
            const lbOverlay = document.getElementById("lightbox-overlay");
            const lbImg = document.getElementById("lightbox-img");
            const lbVid = document.getElementById("lightbox-video");
            
            if (!lbOverlay || !lbImg || !lbVid) return;

            if (asset.type === "image") {
                lbVid.style.display = "none";
                lbVid.pause();
                lbImg.src = asset.url;
                lbImg.style.display = "block";
            } else if (asset.type === "video") {
                lbImg.style.display = "none";
                lbVid.src = asset.url;
                lbVid.style.display = "block";
                lbVid.play().catch(()=>{});
            }

            lbOverlay.classList.remove("hidden");
            playTick();
        });
    });

    // Event Listeners
    trigger.addEventListener("click", () => {
        modal.classList.remove("hidden");
        document.body.style.overflow = "hidden"; // Prevent scrolling
        playTick(); 
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
        document.body.style.overflow = "auto";
        playTick();
    });

    // Close on overlay click
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeBtn.click();
        }
    });

    // Lightbox Global Event Listeners
    const lbOverlay = document.getElementById("lightbox-overlay");
    const lbCloseBtn = document.getElementById("lightbox-close");
    const lbVid = document.getElementById("lightbox-video");

    if (lbOverlay && lbCloseBtn) {
        const closeLightbox = () => {
            lbOverlay.classList.add("hidden");
            if (lbVid) {
                lbVid.pause();
                lbVid.currentTime = 0;
            }
            playTick();
        };

        lbCloseBtn.addEventListener("click", closeLightbox);
        
        lbOverlay.addEventListener("click", (e) => {
            if (e.target === lbOverlay) {
                closeLightbox();
            }
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && !lbOverlay.classList.contains("hidden")) {
                closeLightbox();
            }
        });
    }
}

// ===== DRAGGABLE TILES =====
function initDraggableCards() {
    const tiles = document.querySelectorAll('.tile');
    let highestZ = 100;
    window.isDraggingCard = false;

    tiles.forEach(tile => {
        let isDown = false;
        let startX, startY;
        let initialLeftPercent, initialTopPercent;

        const getLeftPercent = () => parseFloat(tile.style.left) || 0;
        const getTopPercent = () => parseFloat(tile.style.top) || 0;

        // Mouse Events
        tile.addEventListener('mousedown', (e) => {
            if (e.button !== 0) return; // Only left click
            isDown = true;
            window.isDraggingCard = false;
            
            startX = e.clientX;
            startY = e.clientY;
            
            initialLeftPercent = getLeftPercent();
            initialTopPercent = getTopPercent();

            highestZ++;
            tile.style.zIndex = highestZ;
            
            tile.style.cursor = 'grabbing';
            tile.style.transition = 'none'; // disable hover transitions for instant drag
        });

        // Touch Events
        tile.addEventListener('touchstart', (e) => {
            isDown = true;
            window.isDraggingCard = false;
            
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            
            initialLeftPercent = getLeftPercent();
            initialTopPercent = getTopPercent();

            highestZ++;
            tile.style.zIndex = highestZ;
            
            tile.style.transition = 'none';
        }, { passive: true });

        const handleMove = (clientX, clientY) => {
            if (!isDown) return;
            
            const dx = clientX - startX;
            const dy = clientY - startY;

            if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
                window.isDraggingCard = true;
            }

            const dxPercent = (dx / window.innerWidth) * 100;
            const dyPercent = (dy / window.innerHeight) * 100;

            tile.style.left = (initialLeftPercent + dxPercent) + '%';
            tile.style.top = (initialTopPercent + dyPercent) + '%';
        };

        window.addEventListener('mousemove', (e) => handleMove(e.clientX, e.clientY));
        window.addEventListener('touchmove', (e) => handleMove(e.touches[0].clientX, e.touches[0].clientY), { passive: true });

        const handleUp = () => {
            if (isDown) {
                isDown = false;
                tile.style.cursor = 'pointer';
                tile.style.transition = ''; // restore hover transitions from CSS
                
                setTimeout(() => {
                    window.isDraggingCard = false;
                }, 50);
            }
        };

        window.addEventListener('mouseup', handleUp);
        window.addEventListener('touchend', handleUp);
    });
}
