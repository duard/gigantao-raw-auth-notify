import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpcarEntity } from './tFPCAR.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPGCA', ['codgrupocargo'], { unique: true })
@Entity('TFPGCA', { schema: 'SANKHYA' })
export class TfpgcaEntity {
  @Column('int', { primary: true, name: 'CODGRUPOCARGO' })
  codgrupocargo: number;

  @Column('char', { name: 'DESCRGRUPOCARGO', length: 40 })
  descrgrupocargo: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @OneToMany(() => TfpcarEntity, (tfpcarEntity) => tfpcarEntity.codgrupocargo)
  tfpcars: TfpcarEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpgcas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
