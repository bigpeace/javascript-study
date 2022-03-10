'use strict';
import $ from 'jquery';

{
	// 日時を整形するファンクション
	const beautifulTime = function(time) {
		const year = time.getFullYear();
		const month = time.getMonth() + 1;
		const date = time.getDate();
		const hour = time.getHours();
		const minute = twoDigit(time.getMinutes());
		const second = twoDigit(time.getSeconds());
		const timeString = `${year}年${month}月${date}日 ${hour}:${minute}:${second}`;
		return timeString;
	}

	// 2桁にするファンクション
	const twoDigit = function(num) {
		if(num < 10) {
			return '0' + num;
		} else {
			return num;
		}
	}

	let times = [];
	// 入室ボタン
	$('#enter').on('click', function(event) {
		event.preventDefault();
		// const now = new Date();
		times = [];
		times.push(new Date());
		$('#enter-time').text(beautifulTime(times[0]));
		$('#exit-time').text('');
		$('#enter-exit').text('');
	});

	//　退室ボタン
	$('#exit').on('click', function(event) {
		event.preventDefault();
		//const now = new Date();
		// すでに入室時間が入力されている場合だけ処理
		if(times.length === 1) {
			times.push(new Date());
			$('#exit-time').text(beautifulTime(times[1]));

			// 経過時間を計算
			const enterToExit = times[1] - times[0];
			const minute = Math.ceil(enterToExit / 1000 / 60);
			const result = `約${minute}分`;

			$('#enter-exit').text(result);
		}
	});
}
