import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPPDI', ['codprocdiag'], { unique: true })
@Entity('TFPPDI', { schema: 'SANKHYA' })
export class TfppdiEntity {
  @Column('int', { primary: true, name: 'CODPROCDIAG' })
  codprocdiag: number;

  @Column('varchar', { name: 'DESCRPROCDIAG', length: 250 })
  descrprocdiag: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('char', {
    name: 'ATIVO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  ativo: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfppdis)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
