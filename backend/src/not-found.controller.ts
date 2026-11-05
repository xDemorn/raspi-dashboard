import { All, Controller } from '@nestjs/common';

@Controller()
export class NotFoundController {
  @All('*splat')
  notFound() {
    return { message: 'The route you are trying to access is not valid.' };
  }
}
