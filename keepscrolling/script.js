gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.marquee').forEach((el, index) => {
	const w = el.querySelector('.track');
	const [x, xEnd] = (index % 2 == 0) ? [-500, -1500] : [-500, 0];
	gsap.fromTo(w, { x }, {
		x: xEnd,
		scrollTrigger: {
			scrub: 1
		}
	});
});

const centerContent = document.getElementById('center-content');
const centerFold = document.getElementById('center-fold');
const foldsContent = Array.from(document.querySelectorAll('.fold-content'));

let targetScroll = -(
	document.documentElement.scrollTop || document.body.scrollTop
);
let currentScroll = targetScroll;

const tick = () => {
	const overflowHeight = centerContent.clientHeight - centerFold.clientHeight;

	document.body.style.height = `${overflowHeight + window.innerHeight}px`;

	targetScroll = -(
		document.documentElement.scrollTop || document.body.scrollTop
	);
	currentScroll += (targetScroll - currentScroll) * 0.1;

	foldsContent.forEach(content => {
		content.style.transform = `translateY(${currentScroll}px)`;
	});

	requestAnimationFrame(tick);
};
tick();