import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcsfapEntity } from './tCSFAP.entity';
import { TcsgmtEntity } from './tCSGMT.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TcsmodEntity } from './tCSMOD.entity';

@Index('PK_TCSMET', ['codmetod'], { unique: true })
@Entity('TCSMET', { schema: 'SANKHYA' })
export class TcsmetEntity {
  @Column('smallint', { primary: true, name: 'CODMETOD' })
  codmetod: number;

  @Column('char', { name: 'NOMEMETOD', length: 40 })
  nomemetod: string;

  @Column('text', { name: 'DESCRMETOD' })
  descrmetod: string;

  @Column('text', { name: 'OBSERVACOES' })
  observacoes: string;

  @Column('smallint', { name: 'QTDHORAS', nullable: true })
  qtdhoras: number | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @OneToMany(() => TcsfapEntity, (tcsfapEntity) => tcsfapEntity.codmetod)
  tcsfaps: TcsfapEntity[];

  @OneToMany(() => TcsgmtEntity, (tcsgmtEntity) => tcsgmtEntity.codmetod2)
  tcsgmts: TcsgmtEntity[];

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tcsmets)
  @JoinColumn([{ name: 'NOTAMODPREVENDA', referencedColumnName: 'nunota' }])
  notamodprevenda: TgfcabEntity;

  @OneToMany(() => TcsmodEntity, (tcsmodEntity) => tcsmodEntity.codmetod2)
  tcsmods: TcsmodEntity[];
}
