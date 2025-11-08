import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfplcEntity } from './tGFPLC.entity';
import { TgfcttEntity } from './tGFCTT.entity';
import { TgfordEntity } from './tGFORD.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFPLI', ['nucesta', 'codparc', 'codcontato'], { unique: true })
@Entity('TGFPLI', { schema: 'SANKHYA' })
export class TgfpliEntity {
  @Column('int', { primary: true, name: 'NUCESTA' })
  nucesta: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('int', { primary: true, name: 'CODCONTATO' })
  codcontato: number;

  @Column('float', { name: 'QTDNEG', precision: 53 })
  qtdneg: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('int', { name: 'CODPARCFAT', nullable: true })
  codparcfat: number | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('int', { name: 'OCREENTREGA', nullable: true })
  ocreentrega: number | null;

  @Column('char', { name: 'REENTREGA', length: 1, default: () => "'N'" })
  reentrega: string;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfplis)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfplcEntity, (tgfplcEntity) => tgfplcEntity.tgfplis)
  @JoinColumn([{ name: 'NUCESTA', referencedColumnName: 'nucesta' }])
  nucesta2: TgfplcEntity;

  @ManyToOne(() => TgfcttEntity, (tgfcttEntity) => tgfcttEntity.tgfplis)
  @JoinColumn([
    { name: 'CODPARC', referencedColumnName: 'codparc' },
    { name: 'CODCONTATO', referencedColumnName: 'codcontato' },
  ])
  tgfctt: TgfcttEntity;

  @ManyToOne(() => TgfordEntity, (tgfordEntity) => tgfordEntity.tgfplis)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'ORDEMCARGA', referencedColumnName: 'ordemcarga' },
  ])
  tgford: TgfordEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfplis)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}
