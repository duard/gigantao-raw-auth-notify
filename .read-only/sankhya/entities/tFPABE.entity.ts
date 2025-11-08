import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpambEntity } from './tFPAMB.entity';
import { TfpempEntity } from './tFPEMP.entity';

@Index('PK_TFPABE', ['codamb', 'codemp'], { unique: true })
@Entity('TFPABE', { schema: 'SANKHYA' })
export class TfpabeEntity {
  @Column('int', { primary: true, name: 'CODAMB' })
  codamb: number;

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

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpabes)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpambEntity, (tfpambEntity) => tfpambEntity.tfpabes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODAMB', referencedColumnName: 'codamb' }])
  codamb2: TfpambEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpabes)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;
}
