import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfordEntity } from './tGFORD.entity';
import { TgwageEntity } from './tGWAGE.entity';
import { TgwendEntity } from './tGWEND.entity';
import { TgwrecEntity } from './tGWREC.entity';
import { TgwsepEntity } from './tGWSEP.entity';

@Index('PK_TGWDCA', ['coddoca'], { unique: true })
@Index('TGWDCA_I01', ['codend'], {})
@Entity('TGWDCA', { schema: 'SANKHYA' })
export class TgwdcaEntity {
  @Column('int', { primary: true, name: 'CODDOCA' })
  coddoca: number;

  @Column('int', { name: 'CODEND' })
  codend: number;

  @Column('char', { name: 'DESCRICAO', nullable: true, length: 50 })
  descricao: string | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('char', { name: 'SITUACAO', length: 1, default: () => "'L'" })
  situacao: string;

  @Column('float', { name: 'ALTURA', nullable: true, precision: 53 })
  altura: number | null;

  @Column('char', { name: 'TIPDOCA', length: 1, default: () => "'A'" })
  tipdoca: string;

  @Column('char', { name: 'BALCAO', length: 1, default: () => "'N'" })
  balcao: string;

  @Column('varchar', { name: 'IMPRESSORADOCA', nullable: true, length: 100 })
  impressoradoca: string | null;

  @Column('int', { name: 'CODENDCROSSDOCK', nullable: true })
  codendcrossdock: number | null;

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.coddoca)
  tgfcabs: TgfcabEntity[];

  @OneToMany(() => TgfordEntity, (tgfordEntity) => tgfordEntity.coddoca)
  tgfords: TgfordEntity[];

  @OneToMany(() => TgwageEntity, (tgwageEntity) => tgwageEntity.coddoca)
  tgwages: TgwageEntity[];

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgwdcas)
  @JoinColumn([{ name: 'CODEND', referencedColumnName: 'codend' }])
  codend2: TgwendEntity;

  @OneToMany(() => TgwrecEntity, (tgwrecEntity) => tgwrecEntity.coddoca)
  tgwrecs: TgwrecEntity[];

  @OneToMany(() => TgwsepEntity, (tgwsepEntity) => tgwsepEntity.coddoca)
  tgwseps: TgwsepEntity[];
}
