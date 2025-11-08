import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfilrcEntity } from './tGFILRC.entity';

@Index('PK_TGFLRC', ['nulrc'], { unique: true })
@Entity('TGFLRC', { schema: 'SANKHYA' })
export class TgflrcEntity {
  @Column('int', { primary: true, name: 'NULRC' })
  nulrc: number;

  @Column('varchar', { name: 'TIPO', length: 1 })
  tipo: string;

  @Column('date', { name: 'DHPROC' })
  dhproc: Date;

  @Column('varchar', { name: 'NOMEARQ', length: 100 })
  nomearq: string;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @OneToMany(() => TgfilrcEntity, (tgfilrcEntity) => tgfilrcEntity.nulrc2)
  tgfilrcs: TgfilrcEntity[];
}
