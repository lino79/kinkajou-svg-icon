import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import './SvgIcon.css';

export class SvgIcon extends Kinkajou.Component {

	get styleClass() {
		return this.getAsString('styleClass')
			|| [
				'kinkajou',
				'SvgIcon',
				this.className
			].concat(this.$.getAsString('props.class', this).split(' '))
				.filter(c => Boolean(c))
				.join(' ');
	}

	get viewBox() {
		return 24;
	}

	get size() {
		return this.getAsInteger('size', 24, 0);
	}

	constructor(attrs) {
		super(attrs);
		if (!this.className) {
			throw new Error('Missing static get is() property.');
		}
	}

	render() {

		const box = this.$.getAsFloat('viewBox', this, 0, 0);
		if (!box) {
			throw new Error('Illegal static get viewBox() implementation.');
		}

		const svgCnt = this.renderSVG();
		if (!(svgCnt instanceof Kinkajou.VirtualNode)) {
			throw new Error('Illegal renderSVG() method implementation.');
		}

		const svgRoot = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		if (this.id) svgRoot.id = this.id;
		svgRoot.setAttributeNS(null, 'class', this.styleClass);
		svgRoot.setAttributeNS(null, 'viewBox', `0 0 ${box} ${box}`);
		svgRoot.setAttributeNS(null, 'focusable', 'false');
		svgRoot.setAttributeNS(null, 'aria-hidden', 'true');
		svgRoot.setAttributeNS(null, 'role', 'presentation');
		svgRoot.style.fontSize = this.size + 'px';

		Kinkajou.render(svgCnt, svgRoot);
		
		return svgRoot;
	}

	renderSVG() {
		throw new Error('Override renderSVG() method!');
	}

}