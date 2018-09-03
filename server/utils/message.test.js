var expect = require('expect');

var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage',() => {
  it('should generate correct message object',() => {
    var mess = generateMessage('almestady','Hello Abu Alwaleed :-{)');
    expect(mess.createdAt).toBeA('number');
    expect(mess).toInclude({from,text});
  });
});

describe('generateLocationMessageocation',() => {
  it('should generate correct location message object',() => {
    var lat,lng = 1;
    var mess = generateLocationMessage('Wael',lat,lng);
      expect(mess.createdAt).toBeA('number');
      expect(mess.url).toBeA(`https://www.google.com/maps?q=${lat},${lng}`);
      expect(mess).toInclude({from,url});

  });
});
