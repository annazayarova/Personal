import React from "react";
import styled from "styled-components";

const Makenoise = styled.div`
	width: 100%;
	height: 100%;
	z-index: 1;
	opacity: 0.1;
	overflow: hidden;
`;

class MkNoise extends React.Component {
	componentDidMount() {
    	const noise = () => {
      		let canvas, ctx;

      		let wWidth, wHeight;

      		let noiseData = [];

			let frame = 0;

      		let loopTimeout;

			const createNoise = () => {
        		const idata = ctx.createImageData(wWidth, wHeight);

				const buffer32 = new Uint32Array(idata.data.buffer);

				const len = buffer32.length;

        		for (let i = 0; i < len; i++) {

					if (Math.random() < 0.5) {

						buffer32[i] = 0xff000000;
          			}
        		}

        		noiseData.push(idata);
      		};

      		const paintNoise = () => {

				if (frame === 9) {

					frame = 0;

				}

			else { frame++ }

        	ctx.putImageData(noiseData[frame], 0, 0);
    		};

      		const loop = () => {
        		paintNoise(frame);

        		loopTimeout = window.setTimeout(() => {
          			window.requestAnimationFrame(loop);
        		}, 1000 / 25);
      		};

      		const setup = () => {
        		wWidth = window.innerWidth;
        		wHeight = window.innerHeight;

        		canvas.width = wWidth;
        		canvas.height = wHeight;

        		for (let i = 0; i < 10; i++) {
          			createNoise();
        		}

        		loop();
      		};

			let resizeThrottle;

      		const reset = () => {
        		window.addEventListener(
					"resize",

          			() => {
            			window.clearTimeout(resizeThrottle);

            			resizeThrottle = window.setTimeout(() => {
              				window.clearTimeout(loopTimeout);
              				setup();
            			}, 200);
          			},
					false
        		);
      		};

      		const init = (() => {
				canvas = document.getElementById("noise");

        		ctx = canvas.getContext("2d");

        		setup();
      		});
    	};

    	noise();
	}

	render() {
    	return (
      		<Makenoise>

        	<canvas id="noise" />

      		</Makenoise>
    	);
  	}
}

export default MkNoise;
