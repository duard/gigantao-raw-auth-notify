import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TcsaleEntity } from './tCSALE.entity';

@Index('PK_TCSTAC', ['codtipacao'], { unique: true })
@Entity('TCSTAC', { schema: 'SANKHYA' })
export class TcstacEntity {
  @Column('smallint', { primary: true, name: 'CODTIPACAO' })
  codtipacao: number;

  @Column('char', { name: 'NOMEACAO', length: 20 })
  nomeacao: string;

  @Column('char', { name: 'DESCRACAO', length: 120 })
  descracao: string;

  @Column('char', { name: 'MANIPULADOR', length: 120 })
  manipulador: string;

  @OneToMany(() => TcsaleEntity, (tcsaleEntity) => tcsaleEntity.codtipacao)
  tcsales: TcsaleEntity[];
}
