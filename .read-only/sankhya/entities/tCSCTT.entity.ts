import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcspapEntity } from './tCSPAP.entity';
import { TcsoseEntity } from './tCSOSE.entity';

@Index('PK_TCSCTT', ['codpap', 'codcontato'], { unique: true })
@Entity('TCSCTT', { schema: 'SANKHYA' })
export class TcscttEntity {
  @Column('int', { primary: true, name: 'CODPAP' })
  codpap: number;

  @Column('int', { primary: true, name: 'CODCONTATO' })
  codcontato: number;

  @Column('char', { name: 'NOMECONTATO', nullable: true, length: 40 })
  nomecontato: string | null;

  @Column('char', { name: 'APELIDO', nullable: true, length: 15 })
  apelido: string | null;

  @Column('char', { name: 'CARGO', nullable: true, length: 20 })
  cargo: string | null;

  @Column('char', { name: 'EMAIL', nullable: true, length: 80 })
  email: string | null;

  @Column('varchar', { name: 'TELEFONE', nullable: true, length: 13 })
  telefone: string | null;

  @Column('char', { name: 'RAMAL', nullable: true, length: 5 })
  ramal: string | null;

  @Column('varchar', { name: 'CELULAR', nullable: true, length: 13 })
  celular: string | null;

  @ManyToOne(() => TcspapEntity, (tcspapEntity) => tcspapEntity.tcsctts)
  @JoinColumn([{ name: 'CODPAP', referencedColumnName: 'codpap' }])
  codpap2: TcspapEntity;

  @OneToMany(() => TcsoseEntity, (tcsoseEntity) => tcsoseEntity.tcsctt)
  tcsoses: TcsoseEntity[];
}
