var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage',() => {
  it('should generate correct message object',() => {
    var res = generateMessage('almestady','Hello Abu Alwaleed :-{)');
    expect(res.createdAt).toBeA('number');
    expect(res).toInclude({from,text});
  });
});
