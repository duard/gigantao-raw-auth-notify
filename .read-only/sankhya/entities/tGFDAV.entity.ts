import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFDAV', ['nunota', 'sequencia', 'codlogdav'], { unique: true })
@Entity('TGFDAV', { schema: 'SANKHYA' })
export class TgfdavEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @PrimaryGeneratedColumn({ type: 'int', name: 'CODLOGDAV' })
  codlogdav: number;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('float', { name: 'QTDNEG', precision: 53 })
  qtdneg: number;

  @Column('float', { name: 'VLRCUS', precision: 53 })
  vlrcus: number;

  @Column('float', { name: 'VLRUNIT', precision: 53 })
  vlrunit: number;

  @Column('float', { name: 'VLRDESC', precision: 53 })
  vlrdesc: number;

  @Column('float', { name: 'VLRTOT', precision: 53 })
  vlrtot: number;

  @Column('float', { name: 'ALIQICMS', precision: 53 })
  aliqicms: number;

  @Column('smallint', { name: 'CODTRIB' })
  codtrib: number;

  @Column('char', { name: 'CANCELADO', length: 1 })
  cancelado: string;

  @Column('char', { name: 'TIPALTER', length: 1 })
  tipalter: string;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgfdavs)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol: TgfvolEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfdavs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;
}
