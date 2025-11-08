import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfadrcstEntity } from './tGFADRCST.entity';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFADRCSTR1999', ['codemp', 'referencia', 'regpai', 'reg'], {
  unique: true,
})
@Entity('TGFADRCSTR1999', { schema: 'SANKHYA' })
export class Tgfadrcstr1999Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('int', { name: 'QTD_LIN' })
  qtdLin: number;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 4,
    default: () => "'1999'",
  })
  reg: string;

  @Column('varchar', {
    primary: true,
    name: 'REGPAI',
    length: 4,
    default: () => "'0000'",
  })
  regpai: string;

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @ManyToOne(
    () => TgfadrcstEntity,
    (tgfadrcstEntity) => tgfadrcstEntity.tgfadrcstr118,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'REFERENCIA', referencedColumnName: 'referencia' },
  ])
  tgfadrcst: TgfadrcstEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfadrcstr118)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
