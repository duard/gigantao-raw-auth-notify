import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { TgwdcaEntity } from './tGWDCA.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGWAGE', ['nuagenda'], { unique: true })
@Entity('TGWAGE', { schema: 'SANKHYA' })
export class TgwageEntity {
  @Column('int', { primary: true, name: 'NUAGENDA' })
  nuagenda: number;

  @Column('datetime', { name: 'DHPREVISTA' })
  dhprevista: Date;

  @Column('datetime', { name: 'DHENTRADA', nullable: true })
  dhentrada: Date | null;

  @Column('datetime', { name: 'DHSAIDA', nullable: true })
  dhsaida: Date | null;

  @Column('char', { name: 'MOTIVO', length: 1, default: () => "'D'" })
  motivo: string;

  @Column('varchar', { name: 'SOLICITANTE', nullable: true, length: 40 })
  solicitante: string | null;

  @Column('varchar', { name: 'ESPECIETIPO', nullable: true, length: 20 })
  especietipo: string | null;

  @Column('varchar', { name: 'MOTORISTA', nullable: true, length: 40 })
  motorista: string | null;

  @Column('varchar', { name: 'IDENTIDADE', nullable: true, length: 20 })
  identidade: string | null;

  @Column('varchar', { name: 'PLACA', nullable: true, length: 8 })
  placa: string | null;

  @ManyToOne(() => TgwdcaEntity, (tgwdcaEntity) => tgwdcaEntity.tgwages)
  @JoinColumn([{ name: 'CODDOCA', referencedColumnName: 'coddoca' }])
  coddoca: TgwdcaEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgwages)
  @JoinColumn([{ name: 'CODPARCTRANSP', referencedColumnName: 'codparc' }])
  codparctransp: TgfparEntity;

  @ManyToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgwages)
  tgfcabs: TgfcabEntity[];
}
