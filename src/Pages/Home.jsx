// HomePage.js
import React, { useEffect } from "react";
import Header from "../Components/Header";
import Services from "../Components/Services";
import "../Styles/Home.css";
import { gsap } from "gsap";
import Segmentos from "../Components/Segmentos";
import Carrousel from "../Components/Carrousel";
import Integracoes from "../Components/Integracoes";
import Crescimento from "../Components/Crescimento";
import Falar from "../Components/Falar";
import Form from "../Components/form";
import Maps from "../Components/Maps";
import Accordion from "../Components/Accordion";


export default function HomePage() {
    useEffect(() => {
        let width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;

        initHeader();
        initAnimation();
        addListeners();

        function initHeader() {
            width = window.innerWidth;
            height = window.innerHeight;
            target = { x: width / 2, y: height / 2 };

            largeHeader = document.getElementById('large-header');
            largeHeader.style.height = height + 'px';

            canvas = document.getElementById('demo-canvas');
            canvas.width = width;
            canvas.height = height;
            ctx = canvas.getContext('2d');

            points = [];
            for (let x = 0; x < width; x += width / 20) {
                for (let y = 0; y < height; y += height / 20) {
                    const px = x + Math.random() * width / 20;
                    const py = y + Math.random() * height / 20;
                    const p = { x: px, originX: px, y: py, originY: py };
                    points.push(p);
                }
            }

            for (let i = 0; i < points.length; i++) {
                const closest = [];
                const p1 = points[i];
                for (let j = 0; j < points.length; j++) {
                    const p2 = points[j];
                    if (!(p1 === p2)) {
                        let placed = false;
                        for (let k = 0; k < 5; k++) {
                            if (!placed) {
                                if (closest[k] === undefined) {
                                    closest[k] = p2;
                                    placed = true;
                                }
                            }
                        }

                        for (let k = 0; k < 5; k++) {
                            if (!placed) {
                                if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                    closest[k] = p2;
                                    placed = true;
                                }
                            }
                        }
                    }
                }
                p1.closest = closest;
            }

            for (let i in points) {
                const c = new Circle(points[i], 2 + Math.random() * 2, 'rgba(255,255,255,0.3)');
                points[i].circle = c;
            }
        }

        function addListeners() {
            if (!('ontouchstart' in window)) {
                window.addEventListener('mousemove', mouseMove);
            }
            window.addEventListener('scroll', scrollCheck);
            window.addEventListener('resize', resize);
        }

        function mouseMove(e) {
            let posx = 0, posy = 0;
            if (e.pageX || e.pageY) {
                posx = e.pageX;
                posy = e.pageY;
            } else if (e.clientX || e.clientY) {
                posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            }
            target.x = e.clientX;
            target.y = e.clientY;
        }

        function scrollCheck() {
            animateHeader = document.body.scrollTop <= height;
        }

        function resize() {
            width = window.innerWidth;
            height = window.innerHeight;
            largeHeader.style.height = height + 'px';
            canvas.width = width;
            canvas.height = height;
        }

        function initAnimation() {
            animate();
            points.forEach(point => shiftPoint(point));
        }

        function animate() {
            if (animateHeader) {
                ctx.clearRect(0, 0, width, height);
                points.forEach(point => {
                    if (Math.abs(getDistance(target, point)) < 8000) {
                        point.active = 0.5;  // Aumente a intensidade da partícula
                        point.circle.active = 0.8;  // Aumente a intensidade do círculo
                    } else if (Math.abs(getDistance(target, point)) < 30000) {
                        point.active = 0.2;
                        point.circle.active = 0.5;
                    } else if (Math.abs(getDistance(target, point)) < 60000) {
                        point.active = 0.1;
                        point.circle.active = 0.3;
                    } else {
                        point.active = 0;
                        point.circle.active = 0;
                    }

                    drawLines(point);
                    point.circle.draw();
                });
            }
            requestAnimationFrame(animate);
        }

        function shiftPoint(p) {
            gsap.to(p, 1 + 1 * Math.random(), {
                x: p.originX - 50 + Math.random() * 100,
                y: p.originY - 50 + Math.random() * 100,
                ease: 'Circ.easeInOut',
                onComplete: () => shiftPoint(p)
            });
        }



        function drawLines(p) {
            if (!p.active) return;
            p.closest.forEach(closestPoint => {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(closestPoint.x, closestPoint.y);
                ctx.strokeStyle = 'rgba(156,217,249,' + p.active + ')';
                ctx.stroke();
            });
        }

        function Circle(pos, rad, color) {
            const _this = this;
            _this.pos = pos || null;
            _this.radius = rad || null;
            _this.color = color || null;

            _this.draw = function () {
                if (!_this.active) return;
                ctx.beginPath();
                ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
                ctx.fillStyle = 'rgba(156,217,249,' + _this.active + ')';
                ctx.fill();
            };
        }

        function getDistance(p1, p2) {
            return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
        }
    }, []);

    return (
        <div id="home-section">
            <div id="large-header" className="large-header">
                <Header />
                <canvas id="demo-canvas"></canvas>
                <div className="main-title">
                    <h1>
                        HJ <span className="thin">Systems</span>
                    </h1>
                    <p>
                        A <span className="color">HJ SYSTEMS</span> é uma empresa sediada na cidade de Goiânia – GO
                        especializada no desenvolvimento de soluções integradas para gestão
                        de empresas. Atuando no mercado de tecnologia da informação desde
                        1990, a empresa vem acumulando experiência, credibilidade e
                        qualificação técnica, permitindo assim um correto gerenciamento,
                        direção e rapidez nos negócios de sua empresa, é uma ferramenta
                        prática, simples e eficiente que se adapta as particularidades e
                        necessidades da <span className="color">sua empresa</span> para o crescimento no mercado atual.
                    </p>

                    <div className="button">
                        <button>Quero conhecer a Hj Systems</button>
                    </div>
                </div>
            </div>

            <section id="sistemas-section">
                <Services />
            </section>

            <section id="segmentos">
                <Segmentos />
            </section>

            <Carrousel />

            <Integracoes />

            <Crescimento />

            <Falar />

            <Form />

           <Maps />

           <Accordion />
        </div>
    );
}
