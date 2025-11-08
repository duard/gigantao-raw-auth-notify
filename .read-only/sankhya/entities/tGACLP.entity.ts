import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgacllEntity } from './tGACLL.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGACLP', ['nulaudopai'], { unique: true })
@Entity('TGACLP', { schema: 'SANKHYA' })
export class TgaclpEntity {
  @Column('int', { primary: true, name: 'NULAUDOPAI' })
  nulaudopai: number;

  @Column('datetime', { name: 'DHCONF', nullable: true })
  dhconf: Date | null;

  @Column('varchar', { name: 'STATUS', length: 1, default: () => "'P'" })
  status: string;

  @Column('datetime', { name: 'DTVALIDADE' })
  dtvalidade: Date;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @OneToMany(() => TgacllEntity, (tgacllEntity) => tgacllEntity.nulaudopai)
  tgaclls: TgacllEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgaclps)
  @JoinColumn([{ name: 'CODUSUCONF', referencedColumnName: 'codusu' }])
  codusuconf: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgaclps2)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
