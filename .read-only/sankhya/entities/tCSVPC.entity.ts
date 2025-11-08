import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcsccfEntity } from './tCSCCF.entity';
import { TgfvenEntity } from './tGFVEN.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TcsconEntity } from './tCSCON.entity';

@Index('PK_CODVPC', ['numcontrato', 'codprod', 'codvend', 'sequencia'], {
  unique: true,
})
@Entity('TCSVPC', { schema: 'SANKHYA' })
export class TcsvpcEntity {
  @Column('int', { primary: true, name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('smallint', { primary: true, name: 'CODVEND' })
  codvend: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'TIPO', length: 1 })
  tipo: string;

  @Column('float', { name: 'VLRBASE', precision: 53 })
  vlrbase: number;

  @Column('float', { name: 'PERCCOM', precision: 53 })
  perccom: number;

  @Column('datetime', { name: 'DTINI' })
  dtini: Date;

  @Column('datetime', { name: 'DTFIM' })
  dtfim: Date;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('int', { name: 'QTDFAT', nullable: true })
  qtdfat: number | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @OneToMany(() => TcsccfEntity, (tcsccfEntity) => tcsccfEntity.tcsvpc)
  tcsccfs: TcsccfEntity[];

  @ManyToOne(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.tcsvpcs)
  @JoinColumn([{ name: 'CODVEND', referencedColumnName: 'codvend' }])
  codvend2: TgfvenEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcsvpcs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcsvpcs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tcsvpcs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota: TgfcabEntity;

  @ManyToOne(() => TcsconEntity, (tcsconEntity) => tcsconEntity.tcsvpcs)
  @JoinColumn([{ name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' }])
  numcontrato2: TcsconEntity;
}
