import { Column, Entity, Index } from 'typeorm';

@Index('PK_TAPLOG', ['codusu', 'tipoevento', 'dhmov'], { unique: true })
@Entity('TAPLOG', { schema: 'SANKHYA' })
export class TaplogEntity {
  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('smallint', { primary: true, name: 'TIPOEVENTO' })
  tipoevento: number;

  @Column('datetime', { primary: true, name: 'DHMOV' })
  dhmov: Date;

  @Column('float', { name: 'BYTESENVIADOS', nullable: true, precision: 53 })
  bytesenviados: number | null;

  @Column('float', { name: 'BYTESRECEBIDOS', nullable: true, precision: 53 })
  bytesrecebidos: number | null;
}
