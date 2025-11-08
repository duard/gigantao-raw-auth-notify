import { Column, Entity, Index } from 'typeorm';

@Index('PK__TSIDSU__31B13A0E', ['codusu', 'sequencia'], { unique: true })
@Entity('TSIDSU', { schema: 'SANKHYA' })
export class TsidsuEntity {
  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'NUGDG' })
  nugdg: number;

  @Column('varchar', { name: 'DATASOURCE', length: 100 })
  datasource: string;
}
