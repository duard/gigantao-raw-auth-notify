import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcsconEntity } from './tCSCON.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TcsbmeEntity } from './tCSBME.entity';

@Index('PK_TCSBLO', ['codprod', 'codbem', 'numcontrato', 'dtinicio'], {
  unique: true,
})
@Entity('TCSBLO', { schema: 'SANKHYA' })
export class TcsbloEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', { primary: true, name: 'CODBEM', length: 30 })
  codbem: string;

  @Column('int', { primary: true, name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('datetime', { primary: true, name: 'DTINICIO' })
  dtinicio: Date;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @Column('float', { name: 'PRECOMENSAL', precision: 53, default: () => '(0)' })
  precomensal: number;

  @Column('varchar', { name: 'FATURADO', length: 1, default: () => "'N'" })
  faturado: string;

  @Column('datetime', { name: 'DTENVIO', nullable: true })
  dtenvio: Date | null;

  @Column('char', { name: 'TIPOFECHA', nullable: true, length: 1 })
  tipofecha: string | null;

  @ManyToOne(() => TcsconEntity, (tcsconEntity) => tcsconEntity.tcsblos)
  @JoinColumn([{ name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' }])
  numcontrato2: TcsconEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcsblos)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @OneToMany(() => TcsbmeEntity, (tcsbmeEntity) => tcsbmeEntity.tcsblo)
  tcsbmes: TcsbmeEntity[];
}
