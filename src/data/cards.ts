import { ICardItem } from 'src/types/card';

import taiwanNationalFlag from '../assets/images/taiwan-national-flag.png';
import amenBoom01 from '../assets/images/amen-boom_01.png';
import amenYellowOutlined from '../assets/images/amen-yellow-outlined.png';
import wordIsBest01 from '../assets/images/word-is-best_01.png';
import thanksLord from '../assets/images/thanks-lord.png';
import tripleGreat from '../assets/images/triple-great.png';
import iLoveYou from '../assets/images/i-love-you.png';
import pinkHeart from '../assets/images/pink-heart.png';
import lordIsTheBest from '../assets/images/lord-is-the-best.png';

export const Cards = [
	{
		key: 'tripleGreat',
		text: '讚讚讚',
		imagePath: tripleGreat,
		backgroundColor: '#ffffff'
	},
	{
		key: 'amen-boom_01',
		text: '阿們_01',
		imagePath: amenBoom01,
		backgroundColor: '#ECC344'
	},
	{
		key: 'amen-yellow-outlined',
		text: '阿們_02',
		imagePath: amenYellowOutlined,
		backgroundColor: '#FCDB17'
	},
	{
		key: 'word-is-best_01',
		text: '話語最棒',
		imagePath: wordIsBest01,
		backgroundColor: '#69C2C2'
	},
	{
		key: 'lord-is-the-best',
		text: '主最棒',
		imagePath: lordIsTheBest,
		backgroundColor: '#F2F1F0'
	},
	{
		key: 'thanks-lord',
		text: '感謝主',
		imagePath: thanksLord,
		backgroundColor: '#ffffff'
	},
	{
		key: 'i-love-you',
		text: '我愛你',
		imagePath: iLoveYou,
		backgroundColor: '#F15268'
	},
	{
		key: 'pink-heart',
		text: '愛心-粉紅',
		imagePath: pinkHeart,
		backgroundColor: '#000000'
	},
	{
		key: 'taiwan-national-flag',
		text: '台灣國旗',
		imagePath: taiwanNationalFlag,
		backgroundColor: '#000000'
	},
] as ICardItem[];
