import { Module } from '@nestjs/common';
import { globalModules } from './modules/global';
import { featureModules } from './modules';
import { APP_FILTER } from '@nestjs/core';
import { ExceptionFilter } from './exception.filter';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ...globalModules,
    ...featureModules,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ExceptionFilter,
    },
  ],
})
export class AppModule {}
