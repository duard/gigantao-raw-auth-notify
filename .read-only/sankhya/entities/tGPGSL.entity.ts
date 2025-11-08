import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpempEntity } from './tFPEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgpigsEntity } from './tGPIGS.entity';

@Index('PK_TGPGSL', ['codgrelha'], { unique: true })
@Entity('TGPGSL', { schema: 'SANKHYA' })
export class TgpgslEntity {
  @Column('int', { primary: true, name: 'CODGRELHA' })
  codgrelha: number;

  @Column('varchar', { name: 'DESCRGRELHA', nullable: true, length: 100 })
  descrgrelha: string | null;

  @Column('smallint', { name: 'QTDCLASSES', nullable: true })
  qtdclasses: number | null;

  @Column('smallint', { name: 'QTDSTEPS', nullable: true })
  qtdsteps: number | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @OneToMany(() => TfpempEntity, (tfpempEntity) => tfpempEntity.codgrelha)
  tfpemps: TfpempEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgpgsls)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TgpigsEntity, (tgpigsEntity) => tgpigsEntity.codgrelha2)
  tgpigs: TgpigsEntity[];
}
