import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';

@Index('PK_TFPPONBATIDAS', ['codemp', 'codfunc', 'batida'], { unique: true })
@Entity('TFPPONBATIDAS', { schema: 'SANKHYA' })
export class TfpponbatidasEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { primary: true, name: 'BATIDA' })
  batida: Date;

  @Column('varchar', { name: 'GEOLOC', nullable: true, length: 100 })
  geoloc: string | null;

  @Column('image', { name: 'FOTO', nullable: true })
  foto: Buffer | null;

  @Column('varchar', { name: 'ORIGEM', length: 1 })
  origem: string;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpponbatidas)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;
}
