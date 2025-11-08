import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfarcstEntity } from './tGFARCST.entity';

@Index('PK_COMPRARECENTE', ['codemp', 'dtref', 'codprod'], { unique: true })
@Entity('COMPRARECENTE', { schema: 'SANKHYA' })
export class ComprarecenteEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('float', { name: 'BASESUBSTITCOMPRA', nullable: true, precision: 53 })
  basesubstitcompra: number | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.comprarecentes)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(
    () => TgfarcstEntity,
    (tgfarcstEntity) => tgfarcstEntity.comprarecentes,
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
  ])
  tgfarcst: TgfarcstEntity;
}
