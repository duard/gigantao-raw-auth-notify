import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgptprEntity } from './tGPTPR.entity';

@Index('PK_TGPPRC', ['codprocedimento'], { unique: true })
@Entity('TGPPRC', { schema: 'SANKHYA' })
export class TgpprcEntity {
  @Column('int', { primary: true, name: 'CODPROCEDIMENTO' })
  codprocedimento: number;

  @Column('varchar', { name: 'DESCRPROCEDIMENTO', nullable: true, length: 100 })
  descrprocedimento: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgpprcs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(
    () => TgptprEntity,
    (tgptprEntity) => tgptprEntity.codprocedimento2,
  )
  tgptprs: TgptprEntity[];
}
