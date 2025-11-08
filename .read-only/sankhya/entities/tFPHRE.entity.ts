import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpempEntity } from './tFPEMP.entity';

@Index('PK_TFPHRE', ['codcargahoresocial', 'codemp'], { unique: true })
@Entity('TFPHRE', { schema: 'SANKHYA' })
export class TfphreEntity {
  @Column('varchar', { primary: true, name: 'CODCARGAHORESOCIAL', length: 30 })
  codcargahoresocial: string;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('char', { name: 'ENVESOCIAL', length: 1, default: () => "'N'" })
  envesocial: string;

  @Column('varchar', { name: 'RECIBOESOCIAL', nullable: true, length: 40 })
  reciboesocial: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfphres)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfphres)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;
}
