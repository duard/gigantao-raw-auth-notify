import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TfpfcoEntity } from './tFPFCO.entity';

@Index('PK_TFPFCE', ['codfuncao', 'codemp'], { unique: true })
@Entity('TFPFCE', { schema: 'SANKHYA' })
export class TfpfceEntity {
  @Column('int', { primary: true, name: 'CODFUNCAO' })
  codfuncao: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('char', { name: 'ENVESOCIAL', length: 1, default: () => "'N'" })
  envesocial: string;

  @Column('varchar', { name: 'RECIBOESOCIAL', nullable: true, length: 40 })
  reciboesocial: string | null;

  @Column('datetime', { name: 'INIVALESOCIAL', nullable: true })
  inivalesocial: Date | null;

  @Column('datetime', { name: 'FIMVALESOCIAL', nullable: true })
  fimvalesocial: Date | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpfces)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpfces)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;

  @ManyToOne(() => TfpfcoEntity, (tfpfcoEntity) => tfpfcoEntity.tfpfces, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODFUNCAO', referencedColumnName: 'codfuncao' }])
  codfuncao2: TfpfcoEntity;
}
