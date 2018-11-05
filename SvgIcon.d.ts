import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';

export abstract class SvgIcon extends Kinkajou.Component {

	readonly viewBox: number;

	readonly size: number;

	abstract renderSVG();

}