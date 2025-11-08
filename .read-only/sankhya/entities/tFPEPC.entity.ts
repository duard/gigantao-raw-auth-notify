import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfatrEntity } from './tFPFATR.entity';
import { TfpepEntity } from './tFPEP.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPEPC', ['codamb', 'codfatrisco', 'nuepc'], { unique: true })
@Entity('TFPEPC', { schema: 'SANKHYA' })
export class TfpepcEntity {
  @Column('int', { primary: true, name: 'CODAMB' })
  codamb: number;

  @Column('varchar', { primary: true, name: 'CODFATRISCO', length: 10 })
  codfatrisco: string;

  @Column('smallint', { primary: true, name: 'NUEPC' })
  nuepc: number;

  @Column('varchar', { name: 'DSCEPC', nullable: true, length: 70 })
  dscepc: string | null;

  @Column('char', { name: 'EFICEPC', length: 1, default: () => "'N'" })
  eficepc: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TfpfatrEntity, (tfpfatrEntity) => tfpfatrEntity.tfpepcs)
  @JoinColumn([
    { name: 'CODAMB', referencedColumnName: 'codamb' },
    { name: 'CODFATRISCO', referencedColumnName: 'codfatrisco' },
  ])
  tfpfatr: TfpfatrEntity;

  @ManyToOne(() => TfpepEntity, (tfpepEntity) => tfpepEntity.tfpepcs)
  @JoinColumn([{ name: 'CODEP', referencedColumnName: 'codep' }])
  codep: TfpepEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpepcs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
