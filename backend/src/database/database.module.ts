import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forRoot("mongodb+srv://mordo1309:WmFOivgk27rhlVhx@test-angular-nest.bc20v.mongodb.net/nestdbtest?retryWrites=true&w=majority&tls=true")
    ]
})
export class DatabaseModule {}