import 'dotenv/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { openAItranslater } from './modules/openAItranslater'

async function bootstrap() {

  const PORT = process.env.PORT || 5001
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  })

  // let fes = {}
  for(const i of ['Добро пожаловать', 'Настройка', 'Создать сервис']){
      const res = await openAItranslater(i)
      // fes = {...fes, res}
      console.log(res)
      // console.log(i)
  }
  

  const res = await openAItranslater('Добро пожаловать')
  console.log(res)
  
  
  await app.listen(PORT, () => {console.log(`Server started on port = ${PORT}`)})
  
}
bootstrap();
