import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpempEntity } from './tFPEMP.entity';

@Index('PK_TFPESO', ['nometab', 'codemp', 'chave'], { unique: true })
@Entity('TFPESO', { schema: 'SANKHYA' })
export class TfpesoEntity {
  @Column('varchar', { primary: true, name: 'NOMETAB', length: 10 })
  nometab: string;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('datetime', { name: 'DTINCLUSAO' })
  dtinclusao: Date;

  @Column('datetime', { name: 'DTULTENVIO' })
  dtultenvio: Date;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpesos)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpesos)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;
}
