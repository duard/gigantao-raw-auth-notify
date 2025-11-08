import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TrdconEntity } from './tRDCON.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TRDCFC', ['nucontrole', 'nome', 'codusu'], { unique: true })
@Entity('TRDCFC', { schema: 'SANKHYA' })
export class TrdcfcEntity {
  @Column('numeric', {
    primary: true,
    name: 'NUCONTROLE',
    precision: 10,
    scale: 0,
  })
  nucontrole: number;

  @Column('varchar', { primary: true, name: 'NOME', length: 50 })
  nome: string;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('varchar', { name: 'VALOR', nullable: true, length: 3103 })
  valor: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.trdcfcs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;

  @ManyToOne(() => TrdconEntity, (trdconEntity) => trdconEntity.trdcfcs)
  @JoinColumn([{ name: 'NUCONTROLE', referencedColumnName: 'nucontrole' }])
  nucontrole2: TrdconEntity;
}
