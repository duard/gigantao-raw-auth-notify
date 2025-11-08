import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';

@Index('PK_AD_TFPAVA', ['codfunc', 'anoava'], { unique: true })
@Entity('AD_TFPAVA', { schema: 'SANKHYA' })
export class AdTfpavaEntity {
  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('int', { primary: true, name: 'ANOAVA' })
  anoava: number;

  @Column('varchar', { name: 'QUALIDADE', nullable: true, length: 10 })
  qualidade: string | null;

  @Column('varchar', { name: 'PRODUTIVIDADE', nullable: true, length: 10 })
  produtividade: string | null;

  @Column('varchar', { name: 'DISCIPLINA', nullable: true, length: 10 })
  disciplina: string | null;

  @Column('varchar', { name: 'COOPERACAO', nullable: true, length: 10 })
  cooperacao: string | null;

  @Column('varchar', { name: 'CONHECIMENTO', nullable: true, length: 10 })
  conhecimento: string | null;

  @Column('varchar', { name: 'RELACIONAMENTO', nullable: true, length: 10 })
  relacionamento: string | null;

  @Column('varchar', { name: 'ORGANIZACAO', nullable: true, length: 10 })
  organizacao: string | null;

  @Column('varchar', { name: 'COMPROMETIMENTO', nullable: true, length: 10 })
  comprometimento: string | null;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.adTfpavas)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;
}
