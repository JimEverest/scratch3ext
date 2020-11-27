// create by scratch3-extension generator
const ArgumentType = Scratch.ArgumentType;
const BlockType = Scratch.BlockType;
const formatMessage = Scratch.formatMessage;
const log = Scratch.log;

const menuIconURI = "data:image/png;base64,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";
const blockIconURI = "data:image/png;base64,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";

//const APIKEY = "c3a820f5337f4fbdb2bf72eeff9975e8"; // your api secret
const APIID = "HE2011261645001729"
const APIKEY = "c08c690401754ed4b18b77a4b23a72da"

class hfweather{
  constructor (runtime){
    this.runtime = runtime;
    // communication related
    //this.comm = runtime.ioDevices.comm;
    this.session = null;
    //this.runtime.registerPeripheralExtension('hfweather', this);
    // session callbacks
    this.reporter = null;
    //this.onmessage = this.onmessage.bind(this);
    //this.onclose = this.onclose.bind(this);
    this.write = this.write.bind(this);
    // string op
    this.decoder = new TextDecoder();
    this.lineBuffer = '';
  }

  onclose (){
    this.session = null;
  }

  // write (data, parser = null){
  //   if (this.session){
  //     return new Promise(resolve => {
  //       if (parser){
  //         this.reporter = {
  //           parser,
  //           resolve
  //         }
  //       }
  //       this.session.write(data);
  //     })
  //   }
  // }

  // onmessage (data){
  //   const dataStr = this.decoder.decode(data);
  //   this.lineBuffer += dataStr;
  //   if (this.lineBuffer.indexOf('\n') !== -1){
  //     const lines = this.lineBuffer.split('\n');
  //     this.lineBuffer = lines.pop();
  //     for (const l of lines){
  //       if (this.reporter){
  //         const {parser, resolve} = this.reporter;
  //         resolve(parser(l));
  //       };
  //     }
  //   }
  // }


  getInfo (){
    return {
      id: 'hfweather',
      name: '和风天气',
      color1: '#67dcff',
      color2: '#2eeef0',
      menuIconURI: menuIconURI,
      blockIconURI: blockIconURI,
      blocks: [
        {
          opcode: 'getWeather',
          blockType: BlockType.COMMAND,

          arguments: {
            LOC: {
                type: "string",
                defaultValue: 'loc...'
            }
          },

          // arguments: {
          //   "LOC": {
          //     "type": ArgumentType.STRING
          //   }
          // },
          text: 'Get Weather [LOC]'
        },
        {
          opcode: 'temp',
          blockType: BlockType.REPORTER,
          text: 'temprature'
        },
        {
          opcode: 'weatherReturn',
          blockType: BlockType.HAT,
          isEdgeActivated: false,
          text: 'When Weather Return'
        },
        {
          opcode: 'rain',
          blockType: BlockType.REPORTER,
          text: 'Rain'
        }
      ]
    }
  }

  getweather (args, util){
    debugger
    const LOC = args.LOC;
    const url = new URL("https://free-api.heweather.net/s6/weather/now?");
    url.searchParams.append('location', LOC || 'auto_ip')
    url.searchParams.append('key', APIKEY)
   
    return fetch(url).then(res => {
      if (res.ok) {
        res.json().then(json => {
          console.log("weather ret", json);
        });
      }
    });
  }

temp (args, util){

  return this.write(`M0 \n`);
}

weatherReturn (args, util){

  return this.write(`M0 \n`);
}

rain (args, util){

  return this.write(`M0 \n`);
}

}


Scratch.extensions.register(new hfweather());


// module.exports = hfweather;

