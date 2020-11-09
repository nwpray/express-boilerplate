import Controller from '@/core/Controller';

@Controller()
export default class InfoController {
  @Controller.Method('get', '/')
  static read(req, res) {
    res.send('express-boilerplate');
  }
}
