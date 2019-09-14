import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle("Environment Task")
    .setVersion("0.1")
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("swagger", app, document);

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    methods: ["GET", "POST", "PUT", "PATCH", "OPTIONS", "DELETE"],
  });

  await app.listen(4000);
}

bootstrap();
