import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TSIPNZ', ['codseq'], { unique: true })
@Entity('TSIPNZ', { schema: 'SANKHYA' })
export class TsipnzEntity {
  @Column('smallint', { primary: true, name: 'CODSEQ' })
  codseq: number;

  @Column('int', { name: 'CODSANKHYAID' })
  codsankhyaid: number;

  @Column('varchar', { name: 'DEVID', length: 1 })
  devid: string;

  @Column('datetime', { name: 'DTCRIACAO', nullable: true })
  dtcriacao: Date | null;

  @Column('datetime', { name: 'DTALTERACAO', nullable: true })
  dtalteracao: Date | null;

  @Column('varchar', { name: 'TIPPERSONALIZACAO', length: 400 })
  tippersonalizacao: string;

  @Column('varchar', { name: 'IDPERSONALIZACAO', length: 400 })
  idpersonalizacao: string;

  @Column('varchar', { name: 'NOMEPERSONALIZACAO', length: 400 })
  nomepersonalizacao: string;

  @Column('int', { name: 'COMPANYID' })
  companyid: number;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsipnzs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
