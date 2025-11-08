import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TimimkEntity } from './tIMIMK.entity';

@Index('PK_TIMMCK', ['mcknumodelo'], { unique: true })
@Entity('TIMMCK', { schema: 'SANKHYA' })
export class TimmckEntity {
  @Column('int', { primary: true, name: 'MCKNUMODELO' })
  mcknumodelo: number;

  @Column('char', { name: 'MCKTIPOMODELO', nullable: true, length: 1 })
  mcktipomodelo: string | null;

  @Column('datetime', { name: 'MCKDTALTER', nullable: true })
  mckdtalter: Date | null;

  @Column('datetime', { name: 'MCKDTINC', nullable: true })
  mckdtinc: Date | null;

  @OneToMany(() => TimimkEntity, (timimkEntity) => timimkEntity.imkmodelochk2)
  timimks: TimimkEntity[];
}
