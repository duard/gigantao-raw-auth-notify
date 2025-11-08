import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TccacaEntity } from './tCCACA.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TCCITE', ['codcc', 'codprod'], { unique: true })
@Entity('TCCITE', { schema: 'SANKHYA' })
export class TcciteEntity {
  @Column('int', { primary: true, name: 'CODCC' })
  codcc: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('float', { name: 'VLRTAB', nullable: true, precision: 53 })
  vlrtab: number | null;

  @Column('float', { name: 'VLRNEG', nullable: true, precision: 53 })
  vlrneg: number | null;

  @OneToMany(() => TccacaEntity, (tccacaEntity) => tccacaEntity.tccite)
  tccacas: TccacaEntity[];

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tccites)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
