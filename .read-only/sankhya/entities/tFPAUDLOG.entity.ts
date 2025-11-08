import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpaudaviEntity } from './tFPAUDAVI.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPAUDLOG', ['codaudlog'], { unique: true })
@Entity('TFPAUDLOG', { schema: 'SANKHYA' })
export class TfpaudlogEntity {
  @Column('int', { primary: true, name: 'CODAUDLOG' })
  codaudlog: number;

  @Column('datetime', { name: 'DTREF', nullable: true })
  dtref: Date | null;

  @Column('datetime', { name: 'DHAUD' })
  dhaud: Date;

  @ManyToOne(
    () => TfpaudaviEntity,
    (tfpaudaviEntity) => tfpaudaviEntity.tfpaudlogs,
  )
  @JoinColumn([{ name: 'CODAVISO', referencedColumnName: 'codaviso' }])
  codaviso: TfpaudaviEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpaudlogs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TfpempEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpaudlogs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
